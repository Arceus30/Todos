import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Error/Error";
import Home from "../components/Home/Home";
import SignUp from "../components/User/SignUp/SignUp";
import SignIn from "../components/User/SignIn/SignIn";
import About from "../components/About/About";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: import.meta.env.VITE_ABOUT,
                element: <About />,
            },
            {
                path: import.meta.env.VITE_SIGNUP,
                element: <SignUp />,
            },
            {
                path: import.meta.env.VITE_SIGNIN,
                element: <SignIn />,
            },
            // {
            //     path: import.meta.env.VITE_ABOUT,
            //     element: <About />,
            // },
            // {
            //     path: import.meta.env.VITE_ABOUT,
            //     element: <About />,
            // },
            // {
            //     path: import.meta.env.VITE_ABOUT,
            //     element: <About />,
            // },
        ],
    },
]);

export default routes;
