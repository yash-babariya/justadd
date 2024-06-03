import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import Home from "../webApp/pages/home/home";
import Login from "../webApp/pages/form/login/login";
import SignUp from "../webApp/pages/form/signUp/signup";
import Profile from "../webApp/pages/profile/profile";
import Furniture from "../webApp/pages/category/furniture/furniture";
import Sofa from "../webApp/pages/category/furniture/sofa/sofa";
import AddCart from "../webApp/pages/addcart/addcart";
import Shop from "../webApp/pages/shop/shop";
import FavCart from "../webApp/pages/favcart/favcart";
import Cosmetics from "../webApp/pages/category/cosmetics/cosmetics";
import Face from "../webApp/pages/category/cosmetics/categorys/face/face";
import Error from "../webApp/componets/error/componets";


const router = createBrowserRouter([
    {
        path: "/",
        element: localStorage.getItem('IsSignUp') === 'true' ? <Navigate to="/login" /> : <SignUp />
    },
    {
        path: "/login",
        element: localStorage.getItem('IsLogin') === 'true' ? <Navigate to="/home" /> : <Login />
    },
    {
        path: "/",
        element: localStorage.getItem('IsLogin') === 'true' ? <DefaultLayout /> : <Navigate to="/login" />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/furniture",
                element: <Furniture />
            },
            {
                path: '/cosmetics',
                element: <Cosmetics />
            },
            {
                path: "/sofa",
                element: <Sofa />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: 'addCart',
                element: <AddCart />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/favcart",
                element: <FavCart />
            },
            {
                path: "/face",
                element: <Face />
            }
        ]
    },
    {
        path: "*",
        element: <Error />
    }
])

export default router;