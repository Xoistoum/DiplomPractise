import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from "react";
import { auth } from "../src/firebase";

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
            .then(() => console.log("success"))
            .catch((e) => console.log(e));
    };

    return (
        <div>
            {authUser ? (
                <div>
                    <p>{`Signed in as ${authUser.email}`}</p>
                    <button onClick={userSignOut}>Sign Out</button>
                </div>
            ) : (
                <p>Выйти из аккаунта</p>
            )}
        </div>
    );
};

export default AuthDetails;
