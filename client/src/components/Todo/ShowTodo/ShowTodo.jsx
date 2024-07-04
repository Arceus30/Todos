// import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
// import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import TodoCard from "./TodoCard";
import "./ShowTodo.css";

const ShowTodo = () => {
    //     const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    //     const userId = useSelector((state) => state.user.userId);
    //     const navigate = useNavigate();
    const [todos, setTodos] = useState(null);

    //     useEffect(() => {
    //         if (!isLoggedIn || !userId) {
    //             navigate(import.meta.env.VITE_SIGNIN);
    //             toast.error("You need to login first");
    //         }
    //     }, []);

    //     useEffect(() => {
    //         const fetchData = async () => {
    //             try {
    //                 const resp = await axios.get(
    //                     `${import.meta.env.VITE_API_URL}${
    //                         import.meta.env.VITE_API_TODO
    //                     }`,
    //                     { params: { isLoggedIn, userId } }
    //                 );
    //                 setTodos(resp.data.todos);
    //             } catch (e) {
    //                 toast.error(e.response.data.err.message);
    //                 navigate(import.meta.env.VITE_HOME);
    //             }
    //         };
    //         if (isLoggedIn && userId) {
    //             fetchData();
    //         }
    //     }, []);

    return (
        <div className="d-flex flex-column align-items-center mt-3">
            <div className="d-flex justify-content-around align-items-center w-100 my-1">
                <h1 className="customHead2">All Todos</h1>
                <Link
                    className="btn btn-danger customBtn2 pt-1"
                    to={import.meta.env.VITE_CREATE_TODO}
                >
                    <FaPlus className="plusIcon1 me-1" />
                    Add Todo
                </Link>
            </div>
            <div className="w-100 d-flex flex-wrap">
                {todos && todos.length > 0 ? (
                    //  todos.map((todo, index) => (
                    //      <TodoCard
                    //          key={index}
                    //          todo={todo}
                    //          userId={userId}
                    //          setTodos={setTodos}
                    //      />
                    //  ))
                    <h1>YAY</h1>
                ) : (
                    <p className="fs-1 w-100 my-5 py-5 text-center">
                        No todos found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ShowTodo;
