import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../../store/userSlice";
import { toast } from "react-toastify";
import "./Signup.css";
import { customPasswordValidation } from "../../../helper/passwordValidation";
import { onError } from "../../../helper/formError";

const Signup = () => {
    const user = useSelector((state) => state.user);
    const { isLoggedIn, userId } = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn || userId) {
            toast.info("You are already logged in");
            navigate(import.meta.env.VTIE_TODO);
        }
    }, []);

    const form = useForm({
        defaultValues: {
            user: {
                email: "",
                username: "",
                password: "",
            },
        },
        mode: "onBlur",
    });
    const { register, handleSubmit, reset, formState } = form;
    const { errors, isSubmitted, isDirty, isValid, isSubmitting } = formState;

    const handleReset = (e) => {
        e.preventDefault();
        reset();
    };

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(
                import.meta.env.VITE_API_URL +
                    import.meta.env.VITE_API_USER +
                    import.meta.env.VITE_SIGNUP,
                data
            );
            const { registeredUserId, message } = res.data;
            dispatch(setCredentials(registeredUserId));
            toast.success(message);
            navigate(import.meta.env.VITE_TODO);
        } catch (e) {
            toast.error(e.response.data.message);
            reset();
        }
    };

    return (
        <div className="row g-0 h-100">
            <div className="col-12 col-lg-7 h-100 d-flex justify-content-center align-items-center">
                <form
                    className="h-100 w-100 d-flex flex-column justify-content-center align-items-center"
                    onSubmit={handleSubmit(onSubmit, onError)}
                >
                    <div className="px-3 py-0 mb-0 customInput1">
                        <label htmlFor="email" className="form-label fs-4">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control form-control-lg border border-black border-3"
                            id="email"
                            aria-describedby="emailHelp"
                            autoComplete="email"
                            {...register("user.email", {
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Invalid Email Address",
                                },
                            })}
                        />
                        <div id="emailHelp" className="form-text fs-6 m-0">
                            We'll never share your email with anyone else.
                        </div>
                        {!isSubmitted && errors.user?.email && (
                            <p className="text-danger m-0">
                                {errors.user?.email?.message}
                            </p>
                        )}
                    </div>
                    <div className="px-3 py-0 mb-0 customInput1">
                        <label htmlFor="username" className="form-label fs-4">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg border border-black border-3"
                            id="username"
                            autoComplete="username"
                            {...register("user.username", {
                                required: {
                                    value: true,
                                    message: "Username is required",
                                },
                            })}
                        />
                        {!isSubmitted && errors.user?.username && (
                            <p className="text-danger m-0">
                                {errors.user?.username?.message}
                            </p>
                        )}
                    </div>
                    <div className="px-3 py-0 mb-0 customInput1">
                        <label htmlFor="password" className="form-label fs-4">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control form-control-lg border border-black border-3"
                            id="password"
                            autoComplete="current-password"
                            {...register("user.password", {
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                                validate: customPasswordValidation,
                            })}
                        />
                        {!isSubmitted && errors.user?.password && (
                            <p className="text-danger m-0">
                                {errors.user?.password?.message}
                            </p>
                        )}
                    </div>
                    <div className="mt-3 d-flex justify-content-around justify-content-md-between mx-5 customContainer1">
                        <button
                            type="submit"
                            className="btn btn-success fs-4 customBtn1 ms-3"
                            disabled={!isDirty || !isValid || isSubmitting}
                        >
                            Sign Up
                        </button>
                        <button
                            className="btn btn-warning fs-4 customBtn1 me-3"
                            onClick={handleReset}
                            disabled={isSubmitting}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-lg-5 h-100 d-none d-lg-flex justify-content-center align-items-center">
                <h1 className="text-danger fw-bolder customhead2 px-2">
                    Sign Up
                </h1>
            </div>
        </div>
    );
};

export default Signup;
