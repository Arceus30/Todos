import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import TodoCard from "./TodoCard";
import "./ShowTodo.css";

const ShowTodo = () => {
    const user = useSelector((state) => state.user);
    const { isLoggedIn, userId } = user;
    const navigate = useNavigate();
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        if (!isLoggedIn || !userId) {
            navigate(import.meta.env.VITE_SIGNIN);
            toast.error("You need to login first");
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}${
                        import.meta.env.VITE_API_TODOS
                    }`,
                    { params: { userId } }
                );
                setTodos(res.data.todos);
            } catch (e) {
                toast.error(e.response.data.err.message);
                navigate(import.meta.env.VITE_HOME);
            }
        };
        if (isLoggedIn && userId) {
            fetchData();
        }
    }, []);

    return (
        <div className="d-flex flex-column align-items-center mt-3">
            <div className="d-flex justify-content-around align-items-center w-100 my-1">
                <h1 className="customhead4">All Todos</h1>
                <Link
                    className="btn btn-danger customBtn4 pt-1"
                    to={import.meta.env.VITE_CREATE_TODO}
                >
                    <FaPlus className="plusIcon1 me-1" />
                    Add Todo
                </Link>
            </div>
            <div className="w-100 d-flex flex-wrap">
                {todos && todos.length > 0 ? (
                    todos.map((todo, index) => (
                        <TodoCard
                            key={todo._id}
                            todo={todo}
                            setTodos={setTodos}
                        />
                    ))
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
