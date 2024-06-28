import React, { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
import Error from '../webApp/componets/error/error';
import DelayedSuspense from '../webApp/common/loader/DelayedSuspense/DelayedSuspense';
import Stool from '../webApp/pages/category/furniture/stool/stool';
import SittingSofa from '../webApp/pages/category/furniture/sitting-sofa/sitting-sofa';

// Lazy load components
const Home = lazy(() => import('../webApp/pages/home/home'));
const Login = lazy(() => import('../webApp/pages/form/login/login'));
const SignUp = lazy(() => import('../webApp/pages/form/signUp/signup'));
const Profile = lazy(() => import('../webApp/pages/profile/profile'));
const Furniture = lazy(() => import('../webApp/pages/category/furniture/furniture'));
const Sofa = lazy(() => import('../webApp/pages/category/furniture/sofa/sofa'));
const AddCart = lazy(() => import('../webApp/pages/addcart/addcart'));
const Shop = lazy(() => import('../webApp/pages/shop/shop'));
const FavCart = lazy(() => import('../webApp/pages/favcart/favcart'));
const Cosmetics = lazy(() => import('../webApp/pages/category/cosmetics/cosmetics'));
const Face = lazy(() => import('../webApp/pages/category/cosmetics/categorys/face/face'));
const Chair = lazy(() => import('../webApp/pages/category/furniture/chair/chair'));
const ChainLemp = lazy(() => import('../webApp/pages/category/furniture/chain-lemp/chain-lemp'));
const WoodenCabbinet = lazy(() => import('../webApp/pages/category/furniture/wooden-cabbinet/wooden-cabbinet'));
const Checkout = lazy(() => import('../webApp/pages/checkout/checkout'));
const Eyes = lazy(() => import('../webApp/pages/category/cosmetics/categorys/eyes'));

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
