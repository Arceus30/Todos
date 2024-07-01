import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import TodoCard from "./TodoCard";
import "./ShowTodos.css";

const ShowTodos = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    const [todos, setTodos] = useState([{}]);
    useEffect(() => {
        if (!isLoggedIn || !user) {
            navigate(import.meta.env.VITE_SIGNIN);
            toast.error("You need to login first", {
                autoClose: 2000,
                pauseOnHover: false,
            });
        }
    }, [isLoggedIn, user]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(
                    `${import.meta.env.VITE_URL}${
                        import.meta.env.VITE_API_ALL_TODOS
                    }`,
                    { params: { id: user[0]._id } }
                );
                setTodos(resp.data.todos);
            } catch (e) {
                toast.error(e.response.data.err.message, {
                    autoClose: 2000,
                    pauseOnHover: false,
                });
                navigate(import.meta.env.VITE_HOME);
            }
        };
        if (user) {
            fetchData();
        }
    }, [user, isLoggedIn]);

    return (
        <div className="d-flex flex-column align-items-center mt-3">
            <div className="d-flex justify-content-around align-items-center w-100 my-1">
                <h1 className="customHead2">All Todos</h1>
                <Link
                    className="btn btn-danger customBtn4 pt-1"
                    to={import.meta.env.VITE_CREATE_TODO}
                >
                    <FaPlus className="plusIcon me-1" />
                    Add Todo
                </Link>
            </div>
            <div className="w-100 d-flex flex-wrap">
                {todos &&
                    todos.length &&
                    todos.map((todo, index) => (
                        <TodoCard
                            key={index}
                            todo={todo}
                            user={user}
                            setTodos={setTodos}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ShowTodos;
