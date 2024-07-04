import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../../store/userSlice";
import { toast } from "react-toastify";
import "./Signin.css";
import { customPasswordValidation } from "../../../helper/passwordValidation";
import { handleReset, onError } from "../../../helper/resetAndError";

const Signin = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const userId = useSelector((state) => state.user.userId);
    // const dispatch = useDispatch();
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
                username: "",
                password: "",
            },
        },
        mode: "onBlur",
    });
    const { register, handleSubmit, reset, formState } = form;
    const { errors, isSubmitted, isDirty, isValid, isSubmitting } = formState;

    const onSubmit = async (data) => {
        //         try {
        //             const resp = await axios.post(
        //                 import.meta.env.VITE_API_URL +
        //                     import.meta.env.VITE_API_USER_LOGIN,
        //                 data
        //             );
        //             dispatch(login(resp.data.loggedInUserId));
        //             toast.success(resp.data.message);
        //             navigate(import.meta.env.VITE_TODO);
        //         } catch (e) {
        //             toast.error(e.response.data.err.message);
        //             reset();
        //         }
    };

    return (
        <div className="row g-0 h-100">
            <div className="d-none col-lg-5 h-100 d-lg-flex justify-content-center align-items-center">
                <h1 className="text-danger fw-bolder customhead3 px-2">
                    Sign In
                </h1>
            </div>
            <div className="col-12 col-lg-7 h-100 d-flex justify-content-center align-items-center flex-column">
                <form
                    className="w-100 d-flex flex-column justify-content-center align-items-center"
                    onSubmit={handleSubmit(onSubmit, onError)}
                >
                    <div className="px-3 py-0 mb-0 customInput2">
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
                    <div className="px-3 py-0 mb-0 customInput2">
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
                                validate: {
                                    onblur: customPasswordValidation,
                                },
                            })}
                        />
                        {!isSubmitted && errors.user?.password && (
                            <p className="text-danger m-0">
                                {errors.user?.password?.message}
                            </p>
                        )}
                    </div>
                    <div className="mt-3 d-flex justify-content-around justify-content-md-between mx-5 customContainer2">
                        <button
                            type="submit"
                            className="btn btn-success fs-4 customBtn2 ms-3"
                            disabled={!isDirty || !isValid || isSubmitting}
                        >
                            Sign In
                        </button>
                        <button
                            className="btn btn-warning fs-4 customBtn2 me-3"
                            onClick={handleReset}
                            disabled={isSubmitting}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;
