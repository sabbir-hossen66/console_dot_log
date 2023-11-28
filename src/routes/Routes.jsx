import {
    createBrowserRouter
} from "react-router-dom";
// import "./index.css";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);