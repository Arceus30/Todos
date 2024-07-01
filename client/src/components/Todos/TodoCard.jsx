import axios from "axios";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./TodoCard.css";

const TodoCard = ({ user, setTodos, todo }) => {
    const handleComplete = async () => {
        try {
            const resp = await axios.get(
                `${import.meta.env.VITE_URL}${
                    import.meta.env.VITE_API_TODO_COMPLETED
                }`,
                { params: { id: todo._id } }
            );
            toast.success(resp.data.message, {
                autoClose: 2000,
                pauseOnHover: false,
            });
            const { completedTodo } = resp.data;
            setTodos((prevTodos) => {
                return prevTodos.map((prevTodo) =>
                    prevTodo._id === completedTodo._id
                        ? {
                              ...prevTodo,
                              isCompleted: true,
                              dateCompleted: completedTodo.dateCompleted,
                          }
                        : prevTodo
                );
            });
        } catch (e) {
            console.log(e);
            toast.error(e.response.statusText, {
                autoClose: 2000,
                pauseOnHover: false,
            });
        }
    };
    const handleDelete = async () => {
        try {
            const params = {};
            params["todo"] = todo;
            params["userId"] = user[0]._id;
            const resp = await axios.delete(
                `${import.meta.env.VITE_URL}${import.meta.env.VITE_API_TODO}`,
                { params }
            );
            toast.success(resp.data.message, {
                autoClose: 2000,
                pauseOnHover: false,
            });
            const { deletedTodo } = resp.data;
            setTodos((prevTodos) => {
                return prevTodos.filter(
                    (prevTodo) => prevTodo._id !== deletedTodo._id
                );
            });
        } catch (e) {
            toast.error(e.response.statusText, {
                autoClose: 2000,
                pauseOnHover: false,
            });
        }
    };

    return (
        <div className="card mx-3">
            <div className="card-body px-0">
                <div className="px-3">
                    <h5
                        className={`card-title ${
                            todo.isCompleted && "text-decoration-line-through"
                        }`}
                    >
                        {todo.title}
                    </h5>
                    <p className={`card-text ${todo.isCompleted && "d-none"}`}>
                        {todo.description} Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Sit pariatur doloribus
                        corrupti id ratione nostrum excepturi. Aperiam
                        asperiores reiciendis officiis reprehenderit, debitis
                        numquam voluptate aliquam ipsa dolor libero quas amet
                        laboriosam eaque fuga, ex et deserunt ab voluptatum
                        consequatur harum ut eius enim! Reprehenderit iusto sit
                        labore adipisci quibusdam natus.
                    </p>
                    {todo.isCompleted && (
                        <div className="fs-4 ">
                            Completed on {todo.dateCompleted}
                        </div>
                    )}
                </div>
                <div className="d-flex flex-wrap justify-content-between mt-2">
                    <button
                        onClick={handleComplete}
                        className={`btn btn-success customBtn3 ms-2 ${
                            todo.isCompleted && "d-none"
                        }`}
                    >
                        <TiTick className="mb-1" />
                        Completed
                    </button>
                    <Link
                        to={import.meta.env.VITE_EDIT_TODO}
                        className={`btn btn-warning customBtn3 me-2 ${
                            todo.isCompleted && "d-none"
                        }`}
                    >
                        <FaEdit className="mb-1" />
                        Edit
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="btn btn-danger customBtn3 ms-2"
                    >
                        <MdDelete className="mb-1" />
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoCard;
