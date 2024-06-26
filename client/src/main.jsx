import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//React-Redux
import { Provider } from "react-redux";
import store from "./store";
//React-Router
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={routes} />
            <ToastContainer />
        </Provider>
    </React.StrictMode>
);
