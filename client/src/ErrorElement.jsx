import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { useRouteError } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const ErrorElement = () => {
    const error = useRouteError();
    console.error(error);
    const [countDown, setCountDown] = useState(30);
    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            window.location.href = import.meta.env.VITE_HOME;
        }, 30000);

        const timerInterval = setInterval(() => {
            setCountDown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => {
            clearTimeout(redirectTimer);
            clearInterval(timerInterval);
        };
    }, []);
    return (
        <div className="h-100 d-flex flex-column">
            <Navbar />
            <div className="fs-1 my-5 py-5 d-flex flex-column align-items-center">
                <h1 className="fw-bolder">Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <p>Page will redirect in {countDown}</p>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorElement;
