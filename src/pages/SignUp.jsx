import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../src/firebase";
import SetImage from "./Images";
import "./signIn.css";

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [copyPassword, setCopyPassword] = useState("")
    const [error, setError] = useState("")

    function register(e) {
        e.preventDefault()
        if (copyPassword !== password) {
            setError("Пароли должны совпадать!")
            return
        }
        createUserWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user);
            setError("")
            setEmail("")
            setPassword("")
            setCopyPassword("")
        }).catch((error) => console.log(error));
    }

    return (
        <section>
            <SetImage/>
            <div className="login">
            <form onSubmit={register}>
                <h2>Create an account</h2>
                <div className="inputBox">
                    <input
                        placeholder={"Введите email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type={"email"}/>
                </div>
                <div className="inputBox">
                    <input
                        placeholder={"Введите пароль"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={"password"}/>
                </div>

                <div className="inputBox">
                    <input
                        placeholder={"Повторите пароль"}
                        value={copyPassword}
                        onChange={(e) => setCopyPassword(e.target.value)}
                        type={"password"}/>
                </div>
                <div className="inputBox">
                    <button>Create</button>
                    {error ? <p style={{color:"red"}}>{error}</p> : ""}
                </div>

            </form>
            <div className="group">
                <p>
                    Already have an account? <Link to="/signin">Sign In</Link>
                </p>
            </div>

        </div>
        </section>
    )
}
export default SignUp