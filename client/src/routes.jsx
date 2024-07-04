import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorElement from "./ErrorElement.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Signup from "./components/User/SignUp/Signup.jsx";
import Signin from "./components/User/SignIn/Signin.jsx";
import ShowTodo from "./components/Todo/ShowTodo/ShowTodo.jsx";
import CreateTodo from "./components/Todo/CreateTodo/CreateTodo.jsx";
import EditTodo from "./components/Todo/EditTodo/EditTodo.jsx";

const routes = createBrowserRouter([
    {
        path: import.meta.env.VITE_HOME,
        element: <App />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: import.meta.env.VITE_HOME,
                element: <Home />,
            },
            {
                path: import.meta.env.VITE_ABOUT,
                element: <About />,
            },
            {
                path: import.meta.env.VITE_SIGNUP,
                element: <Signup />,
            },
            {
                path: import.meta.env.VITE_SIGNIN,
                element: <Signin />,
            },
            {
                path: import.meta.env.VITE_TODO,
                element: <ShowTodo />,
            },
            {
                path: import.meta.env.VITE_CREATE_TODO,
                element: <CreateTodo />,
            },
            {
                path: import.meta.env.VITE_EDIT_TODO,
                element: <EditTodo />,
            },
        ],
    },
]);

export default routes;
