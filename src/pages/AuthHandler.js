import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Loading from "../components/Loader";
import Map from "../components/Map";
import Panel from "../components/Panel";
import { auth } from "../services/firebase";
import SetImage from "./Images";

const AuthHandler = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    if (loading) {
        return <Loading/>;
    }

    const urls = {
        signIn: "/signin",
        signUp: "/signup"
    };

    return (
        <>
            {user ? (
                <>
                    <Panel />
                    <Map />
                </>
            ) : (
                <section>
                    <SetImage/>
                    <div className="login">
                        <h2>Добро пожаловать</h2>
                        <p style={{ textAlign: "center" }}>Пожалуйста, зарегестрируйтесь или войдите в аккаунт</p>
                        <div className="inputBox">
                            <Link to={urls.signIn}>
                                <button id={"btn"}>Войти</button>
                            </Link>
                            <Link to={urls.signUp}>
                                <button id={"btn"}>Зарегестрироваться</button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default AuthHandler;