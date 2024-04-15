import "./signIn.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import SetImage from "./Images";

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
                setError("Sorry, couldn't find your account");
            });
    };

    return (
        <section>
            <SetImage/>
            <div className="login">
                <h2>Log in</h2>
                <div className="inputBox">
                    <input
                        placeholder={"Please enter your email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type={"email"}
                    />
                </div>
                <div className="inputBox">
                    <input
                        placeholder={"Please enter your password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={"password"}
                    />
                </div>

                <div className="inputBox">
                    <button id={"btn"} onClick={logIn}>Login</button>
                    {error ? <p style={{ color: "red" }}>{error}</p> : ""}
                </div>
                <div className="group">
                    <p>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
