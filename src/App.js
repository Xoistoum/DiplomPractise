import React, { StrictMode } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthHandler from "./components/Auth/AuthHandler";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

const App = () => {
    return (
        <Router>
            <StrictMode>
                <Routes>
                    <Route path="" element={<AuthHandler />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </StrictMode>
        </Router>
    );
};

export default App;
