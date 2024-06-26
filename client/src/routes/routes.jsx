import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Error/Error";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [{}],
    },
]);

export default routes;
