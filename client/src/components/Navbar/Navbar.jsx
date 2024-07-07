import React from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { SiTodoist } from "react-icons/si";
import { FiUserPlus } from "react-icons/fi";
import { PiSignInBold, PiSignOutBold } from "react-icons/pi";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../store/userSlice";

const Navbar = () => {
    const user = useSelector((state) => state.user);
    const { isLoggedIn, userId } = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(logout());
        toast.success("logout successfully");
        return navigate(import.meta.env.VITE_HOME);
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
                                className="nav-link py-0 fs-5 aboutNav"
                                to={import.meta.env.VITE_ABOUT}
                            >
                                About
                            </Link>
                        </li>
                        {!isLoggedIn || !userId ? (
                            <>
                                <li className="nav-item mx-lg-3 mb-1 mb-lg-0">
                                    <Link
                                        className="btn btn-danger py-1 px-2 px-lg-3 d-flex"
                                        to={import.meta.env.VITE_SIGNUP}
                                    >
                                        <div className="mb-1 me-2">
                                            <FiUserPlus />
                                        </div>
                                        Sign Up
                                    </Link>
                                </li>
                                <li className="nav-item mb-1 mb-lg-0">
                                    <Link
                                        className="btn btn-danger py-1 px-2 px-lg-3 d-flex"
                                        to={import.meta.env.VITE_SIGNIN}
                                    >
                                        <div className="mb-1 me-1">
                                            <PiSignInBold />
                                        </div>
                                        Sign In
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item mx-lg-3 mb-1 mb-lg-0">
                                <Link
                                    className="btn btn-danger py-1 px-2 px-lg-3 d-flex"
                                    onClick={handleSignOut}
                                >
                                    <div className="mb-1 me-1">
                                        <PiSignOutBold />
                                    </div>
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
