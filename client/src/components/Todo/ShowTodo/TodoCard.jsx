// import axios from "axios";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./TodoCard.css";

const TodoCard = () => {
    const handleComplete = async () => {
        //         try {
        //             const resp = await axios.post(
        //                 `${
        //                     import.meta.env.VITE_API_URL
        //                 }${import.meta.env.VITE_API_SPECIFIC_TODOS.replace(
        //                     ":todoId",
        //                     todo._id
        //                 )}`
        //             );
        //             toast.success(resp.data.message);
        //             const { completedTodo } = resp.data;
        //             setTodos((prevTodos) => {
        //                 return prevTodos.map((prevTodo) =>
        //                     prevTodo._id === completedTodo._id
        //                         ? {
        //                               ...prevTodo,
        //                               isCompleted: true,
        //                               dateCompleted: completedTodo.dateCompleted,
        //                           }
        //                         : prevTodo
        //                 );
        //             });
        //         } catch (e) {
        //             toast.error(e.message);
        //         }
    };

    const handleDelete = async () => {
        //         try {
        //             const resp = await axios.delete(
        //                 `${import.meta.env.VITE_API_URL}${
        //                     import.meta.env.VITE_API_TODO
        //                 }?userId=${userId}`,
        //                 { data: { todo } }
        //             );
        //             toast.success(resp.data.message);
        //             const { deletedTodo } = resp.data;
        //             setTodos((prevTodos) => {
        //                 return prevTodos.filter(
        //                     (prevTodo) => prevTodo._id !== deletedTodo._id
        //                 );
        //             });
        //         } catch (e) {
        //             toast.error(e.message);
        //         }
    };

    return (
        <div className="card mx-3 customCard1">
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
                        {todo.description}
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
                        to={import.meta.env.VITE_EDIT_TODO.replace(
                            ":todoId",
                            todo._id
                        )}
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
