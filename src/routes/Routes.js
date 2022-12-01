import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home/Home";
import CategoriesCard from "../pages/Home/Product/CategoriesCard";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import PrivateRouter from "./PrivateRouter";

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
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"/category/:id",
                element:<PrivateRouter><CategoriesCard></CategoriesCard></PrivateRouter>,   
                loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
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

