import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => console.log("Успешно!"))
            .catch((e) => console.log(e));
    };

    return (
        <div>
            {authUser ? (
                <div>
                    <p>{`Войти как ${authUser.email}`}</p>
                    <button onClick={userSignOut}>Выйти</button>
                </div>
            ) : (
                <p>Выйти из аккаунта</p>
            )}
        </div>
    );
};

export default AuthDetails;
