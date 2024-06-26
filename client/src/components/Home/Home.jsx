import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const navigate = useNavigate();
    const handleClick = () => {
        if (isLoggedIn) {
            navigate(import.meta.env.VITE_TODO);
        }
        navigate(import.meta.env.VITE_SIGNIN);
    };
    return (
        <div className="d-flex my-auto justify-content-center align-items-center mb-3">
            <div className="w-75 d-flex justify-content-center align-items-center flex-column mx-0">
                <h1 className="text-center customHead">
                    Organize your <br />
                    work and life, finally.
                </h1>
                <p className="text-center my-2 customText">
                    Become focused, organized, and calm with <br />
                    todo app. The World's #1 task manager app.
                </p>
                <button
                    className="btn btn-danger my-3 p-2 fs-3 fw-semibold"
                    onClick={handleClick}
                >
                    Make Todo List
                </button>
            </div>
        </div>
    );
};

export default Home;
