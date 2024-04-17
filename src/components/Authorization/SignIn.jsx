import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import SetImage from "./SetImage";
import "./signIn.css";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const logIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError("");
                setEmail("");
                setPassword("");
                window.location.href = "/";
            })
            .catch((error) => {
                console.log(error);
                setError("Аккаунт не найден");
            });
    };

    return (
        <section>
            <SetImage/>
            <div className="login">
                <h2>Войти</h2>
                <div className="inputBox">
                    <input
                        placeholder={"Введите email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type={"email"}
                    />
                </div>
                <div className="inputBox">
                    <input
                        placeholder={"Введите пароль"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={"password"}
                    />
                </div>

                <div className="inputBox">
                    <button id={"btn"} onClick={logIn}>Логин</button>
                    {error ? <p style={{ color: "red" }}>{error}</p> : ""}
                </div>
                <div className="group">
                    <p>
                        Еще нет аккаунта? Зарегестрируйтесь <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
