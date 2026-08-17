import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CountryDetail from "../pages/CountryDetail";
import App from "../App";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/country/:name", element: <CountryDetail /> },
        ],
    },
]);
