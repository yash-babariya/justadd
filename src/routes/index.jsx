import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './DefaultLayout.jsx';
import Error from '../webApp/componets/error/error.jsx';
import DelayedSuspense from '../webApp/common/loader/DelayedSuspense/DelayedSuspense.jsx';
import Stool from '../webApp/pages/category/furniture/stool/stool.jsx';
import SittingSofa from '../webApp/pages/category/furniture/sitting-sofa/sitting-sofa.jsx';
import Home from '../webApp/pages/home/home.jsx';
import Login from '../webApp/pages/form/login/login.jsx';
import SignUp from '../webApp/pages/form/signUp/signup.jsx';
import Profile from '../webApp/pages/profile/profile.jsx';
import Furniture from '../webApp/pages/category/furniture/furniture.jsx';
import Sofa from '../webApp/pages/category/furniture/sofa/sofa.jsx';
import AddCart from '../webApp/pages/addcart/addcart.jsx';
import Shop from '../webApp/pages/shop/shop.jsx';
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
        element: localStorage.getItem('IsSignUp') === 'true' ? <Navigate to="/login" /> : (
            <DelayedSuspense>
                <SignUp />
            </DelayedSuspense>
        )
    },
    {
        path: "/login",
        element: localStorage.getItem('IsLogin') === 'true' ? <Navigate to="/home" /> : (
            <DelayedSuspense>
                <Login />
            </DelayedSuspense>
        )
    },
    {
        path: "/",
        element: localStorage.getItem('IsLogin') === 'true' ? <DefaultLayout /> : <Navigate to="/login" />,
        children: [
            {
                path: "home", // Remove extra slash before path names inside children
                element: (
                    <DelayedSuspense>
                        <Home />
                    </DelayedSuspense>
                )
            },
            {
                path: "home/furniture",
                element: (
                    <DelayedSuspense>
                        <Furniture />
                    </DelayedSuspense>
                )
            },
            {
                path: 'home/cosmetics',
                element: (
                    <DelayedSuspense>
                        <Cosmetics />
                    </DelayedSuspense>
                )
            },
            {
                path: "eyes",
                element: (
                    <DelayedSuspense>
                        <Eyes />
                    </DelayedSuspense>
                )
            },
            {
                path: "chair",
                element: (
                    <DelayedSuspense>
                        <Chair />
                    </DelayedSuspense>
                )
            },
            {
                path: "sofa",
                element: (
                    <DelayedSuspense>
                        <Sofa />
                    </DelayedSuspense>
                )
            },
            {
                path: "stool",
                element: (
                    <DelayedSuspense>
                        <Stool />
                    </DelayedSuspense>
                )
            },
            {
                path: "chain-lemp",
                element: (
                    <DelayedSuspense>
                        <ChainLemp />
                    </DelayedSuspense>
                )
            },
            {
                path: "sitting-sofa",
                element: (
                    <DelayedSuspense>
                        <SittingSofa />
                    </DelayedSuspense>
                )
            },
            {
                path: "wooden-cabbinet",
                element: (
                    <DelayedSuspense>
                        <WoodenCabbinet />
                    </DelayedSuspense>
                )

            },
            {
                path: "shop",
                element: (
                    <DelayedSuspense>
                        <Shop />
                    </DelayedSuspense>
                )
            },
            {
                path: 'addCart',
                element: (
                    <DelayedSuspense>
                        <AddCart />
                    </DelayedSuspense>
                )
            },
            {
                path: "checkout",
                element: (
                    <DelayedSuspense>
                        <Checkout />
                    </DelayedSuspense>
                )
            },
            {
                path: "profile",
                element: (
                    <DelayedSuspense>
                        <Profile />
                    </DelayedSuspense>
                )
            },
            {
                path: "favcart",
                element: (
                    <DelayedSuspense>
                        <FavCart />
                    </DelayedSuspense>
                )
            },
            {
                path: "face",
                element: (
                    <DelayedSuspense>
                        <Face />
                    </DelayedSuspense>
                )
            }
        ]
    },
    {
        path: "*",
        element: <Error />
    }
]);

export default router;

