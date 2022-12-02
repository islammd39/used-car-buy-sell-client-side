import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import DashBoard from "../pages/DashBoard/DashBoard";
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
                loader:({params}) => fetch(`https://b612-used-products-resale-server-side-islammd39.vercel.app/categories/${params.id}`)
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/dashboard",
                element:<DashBoard></DashBoard>
            },
            {
                path:"*",
                element:<ErrorPage></ErrorPage>
            }
        ]
    }
])

