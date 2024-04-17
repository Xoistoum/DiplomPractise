import React, { StrictMode } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthHandler from "./components/Authorization/AuthHandler";
import SignIn from "./components/Authorization/SignIn";
import SignUp from "./components/Authorization/SignUp";

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
