import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
    return (
        <div className="h-100 d-flex flex-column">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
