import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './DefaultLayout.jsx';
import Error from '../webApp/componets/error/error.jsx';
import Stool from '../webApp/pages/category/furniture/stool/stool.jsx';
import SittingSofa from '../webApp/pages/category/furniture/sitting-sofa/sitting-sofa.jsx';
import Home from '../webApp/pages/home/home.jsx';
import Login from '../webApp/pages/form/login/login.jsx';
import SignUp from '../webApp/pages/form/signUp/signup.jsx';
import Profile from '../webApp/pages/profile/profile.jsx';
import Furniture from '../webApp/pages/category/furniture/furniture.jsx';
import Sofa from '../webApp/pages/category/furniture/sofa/sofa.jsx';
import AddCart from '../webApp/pages/addcart/addcart.jsx';
import FavCart from '../webApp/pages/favcart/favcart.jsx';
import Cosmetics from '../webApp/pages/category/cosmetics/cosmetics.jsx';
import Face from '../webApp/pages/category/cosmetics/categorys/face/face.jsx';
import Chair from '../webApp/pages/category/furniture/chair/chair.jsx';
import ChainLemp from '../webApp/pages/category/furniture/chain-lemp/chain-lemp.jsx';
import WoodenCabbinet from '../webApp/pages/category/furniture/wooden-cabbinet/wooden-cabbinet.jsx';
import Checkout from '../webApp/pages/checkout/checkout.jsx';
import Eyes from '../webApp/pages/category/cosmetics/categorys/eyes/index.jsx';


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
                path: "home",
                element: <Home />
            },
            {
                path: "home/furniture",
                element: <Furniture />
            },
            {
                path: 'home/cosmetics',
                element: <Cosmetics />
            },
            {
                path: "eyes",
                element: <Eyes />
            },
            {
                path: "chair",
                element: <Chair />
            },
            {
                path: "sofa",
                element: <Sofa />
            },
            {
                path: "stool",
                element: <Stool />
            },
            {
                path: "chain-lamp",
                element: <ChainLemp />
            },
            {
                path: "sitting-sofa",
                element: <SittingSofa />
            },
            {
                path: "wooden-cabbinet",
                element: <WoodenCabbinet />
            },
            {
                path: 'addCart',
                element: <AddCart />
            },
            {
                path: "checkout",
                element: <Checkout />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "favcart",
                element: <FavCart />
            },
            {
                path: "face",
                element: <Face />
            }
        ]
    },
    {
        path: "*",
        element: <Error />
    }
]);

export default router;

