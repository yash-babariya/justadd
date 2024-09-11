import React, { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
import Error from '../webApp/componets/error/error';
import DelayedSuspense from '../webApp/common/loader/DelayedSuspense/DelayedSuspense';
import Stool from '../webApp/pages/category/furniture/stool/stool';
import SittingSofa from '../webApp/pages/category/furniture/sitting-sofa/sitting-sofa';
import Home from '../webApp/pages/home/home';
import Login from '../webApp/pages/form/login/login';
import SignUp from '../webApp/pages/form/signUp/signup';
import Profile from '../webApp/pages/profile/profile';
import Furniture from '../webApp/pages/category/furniture/furniture';
import Sofa from '../webApp/pages/category/furniture/sofa/sofa';
import AddCart from '../webApp/pages/addcart/addcart';
import Shop from '../webApp/pages/shop/shop';
import FavCart from '../webApp/pages/favcart/favcart';
import Cosmetics from '../webApp/pages/category/cosmetics/cosmetics';
import Face from '../webApp/pages/category/cosmetics/categorys/face/face';
import Chair from '../webApp/pages/category/furniture/chair/chair';
import ChainLemp from '../webApp/pages/category/furniture/chain-lemp/chain-lemp';
import WoodenCabbinet from '../webApp/pages/category/furniture/wooden-cabbinet/wooden-cabbinet';
import Checkout from '../webApp/pages/checkout/checkout';
import Eyes from '../webApp/pages/category/cosmetics/categorys/eyes/eyes';


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
                path: "/home",
                element: (
                    <DelayedSuspense>
                        <Home />
                    </DelayedSuspense>
                )
            },
            {
                path: "/home/furniture",
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
                path: "/eyes",
                element: (
                    <DelayedSuspense>
                        <Eyes />
                    </DelayedSuspense>
                )
            },
            {
                path: "/chair",
                element: (
                    <DelayedSuspense>
                        <Chair />
                    </DelayedSuspense>
                )
            },
            {
                path: "/sofa",
                element: (
                    <DelayedSuspense>
                        <Sofa />
                    </DelayedSuspense>
                )
            },
            {
                path: "/stool",
                element: (
                    <DelayedSuspense>
                        <Stool />
                    </DelayedSuspense>
                )
            },
            {
                path: "/chain-lemp",
                element: (
                    <DelayedSuspense>
                        <ChainLemp />
                    </DelayedSuspense>
                )
            },
            {
                path: "/sitting-sofa",
                element: (
                    <DelayedSuspense>
                        <SittingSofa />
                    </DelayedSuspense>
                )
            },
            {
                path: "/wooden-cabbinet",
                element: (
                    <DelayedSuspense>
                        <WoodenCabbinet />
                    </DelayedSuspense>
                )

            },
            {
                path: "/shop",
                element: (
                    <DelayedSuspense>
                        <Shop />
                    </DelayedSuspense>
                )
            },
            {
                path: '/addCart',
                element: (
                    <DelayedSuspense>
                        <AddCart />
                    </DelayedSuspense>
                )
            },
            {
                path: "/checkout",
                element: (
                    <DelayedSuspense>
                        <Checkout />
                    </DelayedSuspense>
                )
            },
            {
                path: "/profile",
                element: (
                    <DelayedSuspense>
                        <Profile />
                    </DelayedSuspense>
                )
            },
            {
                path: "/favcart",
                element: (
                    <DelayedSuspense>
                        <FavCart />
                    </DelayedSuspense>
                )
            },
            {
                path: "/face",
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
