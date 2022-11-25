import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>    
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"*",
                element:<ErrorPage></ErrorPage>
            }
        ]
    }
])

