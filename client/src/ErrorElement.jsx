import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div
            id="error-page"
            className="w-100 h-100 d-flex justify-content-center align-items-center"
        >
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorElement;
