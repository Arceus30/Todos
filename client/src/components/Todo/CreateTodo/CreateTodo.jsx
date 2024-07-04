import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import "./createTodo.css";

const CreateTodos = () => {
    //     const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    //     const userId = useSelector((state) => state.user.userId);
    //     const navigate = useNavigate();
    //     useEffect(() => {
    //         if (!isLoggedIn || !userId) {
    //             toast.error("You need to login first");
    //             navigate(import.meta.env.VITE_SIGNIN);
    //         }
    //     }, []);
    //     const form = useForm({
    //         defaultValues: {
    //             todo: {
    //                 title: "",
    //                 description: "",
    //             },
    //         },
    //         mode: "onBlur",
    //     });
    //     const { register, handleSubmit, reset, formState } = form;
    //     const { errors, isSubmitted, isDirty, isValid, isSubmitting } = formState;
    //     const handleReset = (e) => {
    //         e.preventDefault();
    //         reset();
    //     };
    //     const onSubmit = async (data) => {
    //         try {
    //             const resp = await axios.post(
    //                 `${import.meta.env.VITE_API_URL}${
    //                     import.meta.env.VITE_API_TODO
    //                 }?isLoggedIn=${isLoggedIn}&userId=${userId}`,
    //                 data
    //             );
    //             toast.success(resp.data.message);
    //             navigate(import.meta.env.VITE_TODO);
    //         } catch (e) {
    //             toast.error(e.response.data.err.message);
    //             reset();
    //         }
    //     };
    //     const onError = (errors) => {
    //         try {
    //             const error = errors.todo;
    //             for (let e in error) {
    //                 toast.error(error[e].message);
    //             }
    //         } catch (e) {
    //             toast.error(e.message);
    //         }
    //     };
    //     return (
    //         <div className="row g-0 h-100">
    //             <div className="col-12 col-lg-7 h-100 d-flex justify-content-center align-items-center">
    //                 <form
    //                     className="h-100 w-100 d-flex flex-column justify-content-center align-items-center"
    //                     onSubmit={handleSubmit(onSubmit, onError)}
    //                 >
    //                     <div className="px-3 py-0 mb-0 customInput4">
    //                         <label htmlFor="title" className="form-label fs-4">
    //                             Title
    //                         </label>
    //                         <input
    //                             type="text"
    //                             className="form-control form-control-lg border border-black border-3"
    //                             id="title"
    //                             autoComplete="title"
    //                             {...register("todo.title", {
    //                                 required: {
    //                                     value: true,
    //                                     message: "Title is required",
    //                                 },
    //                             })}
    //                         />
    //                         {!isSubmitted && errors.todo?.title && (
    //                             <p className="text-danger m-0">
    //                                 {errors.todo?.title?.message}
    //                             </p>
    //                         )}
    //                     </div>
    //                     <div className="px-3 py-0 mb-0 customInput4">
    //                         <label
    //                             htmlFor="description"
    //                             className="form-label fs-4"
    //                         >
    //                             Descriptioin
    //                         </label>
    //                         <textarea
    //                             type="text"
    //                             className="form-control form-control-lg border border-black border-3"
    //                             id="description"
    //                             autoComplete="description"
    //                             {...register("todo.description", {
    //                                 required: {
    //                                     value: true,
    //                                     message: "Description is required",
    //                                 },
    //                             })}
    //                         ></textarea>
    //                         {!isSubmitted && errors.todo?.description && (
    //                             <p className="text-danger m-0">
    //                                 {errors.todo?.description?.message}
    //                             </p>
    //                         )}
    //                     </div>
    //                     <div className="mt-3 d-flex justify-content-around justify-content-md-between mx-5 customContainer4">
    //                         <button
    //                             type="submit"
    //                             className="btn btn-success fs-4 customBtn6 ms-3"
    //                             disabled={!isDirty || !isValid || isSubmitting}
    //                         >
    //                             Add Todo
    //                         </button>
    //                         <button
    //                             className="btn btn-warning fs-4 customBtn6 me-3"
    //                             onClick={handleReset}
    //                             disabled={isSubmitting}
    //                         >
    //                             Reset
    //                         </button>
    //                     </div>
    //                 </form>
    //             </div>
    //             <div className="col-lg-5 h-100 d-none d-lg-flex justify-content-center align-items-center">
    //                 <h1 className="text-danger fw-bolder customhead6 px-2">
    //                     Create
    //                     <br /> Todo
    //                 </h1>
    //             </div>
    //         </div>
    //     );
};

export default CreateTodos;
