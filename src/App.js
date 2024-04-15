import React, { StrictMode } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AuthHandler from "./pages/AuthHandler";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
