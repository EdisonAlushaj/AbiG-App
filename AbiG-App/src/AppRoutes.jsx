import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./App.jsx";
import Home from './Home/Home.jsx';
import About from './AboutUs/About.jsx'

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Navigate to="/app/home" />} />
        <Route path="/app" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
        </Route>
    </Routes>
);

export default AppRoutes;