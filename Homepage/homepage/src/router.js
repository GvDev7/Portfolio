import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";


const RouterHandler = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
            </Routes>
        </Router>
    )
};

export default RouterHandler;