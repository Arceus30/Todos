import React from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { SiTodoist } from "react-icons/si";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        if (isLoggedIn) {
            dispatch(logout());
            navigate(import.meta.env.VITE_HOME);
            toast.success("logout successfully");
        }
        toast.error("logout failed");
    };
    return (
        <nav className="navbar navbar-expand-lg m-0 px-0 px-lg-5 py-0">
            <div className="container-fluid">
                <Link
                    className="navbar-brand text-danger d-flex align-items-end"
                    to={import.meta.env.VITE_HOME}
                >
                    <div className="me-1 mb-1 fs-2">
                        <SiTodoist />
                    </div>
                    <span className="fs-3 fw-bolder">Todo</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link py-0 fs-5"
                                to={import.meta.env.VITE_HOME}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mb-1 mb-lg-0">
                            <Link
                                className="nav-link py-0 fs-5 about"
                                to={import.meta.env.VITE_ABOUT}
                            >
                                About
                            </Link>
                        </li>
                        {!isLoggedIn ? (
                            <>
                                <li className="nav-item mx-lg-3 mb-1 mb-lg-0">
                                    <Link
                                        className="btn btn-danger py-1 px-2 px-lg-3"
                                        to={import.meta.env.VITE_SIGNUP}
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                                <li className="nav-item mb-1 mb-lg-0">
                                    <Link
                                        className="btn btn-danger py-1 px-2 px-lg-3"
                                        to={import.meta.env.VITE_SIGNIN}
                                    >
                                        Sign In
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item mx-3">
                                <Link
                                    className="btn btn-danger py-1"
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
