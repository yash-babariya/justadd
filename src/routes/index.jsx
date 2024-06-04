import React, { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
import Error from '../webApp/componets/error/componets';
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
                path: "/furniture",
                element: (
                    <DelayedSuspense>
                        <Furniture />
                    </DelayedSuspense>
                )
            },
            {
                path: '/cosmetics',
                element: (
                    <DelayedSuspense>
                        <Cosmetics />
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
<<<<<<< HEAD
                path: "/stool",
                element: (
                    <DelayedSuspense>
                        <Stool />
=======
                path: "/chain-lemp",
                element: (
                    <DelayedSuspense>
                        <ChainLemp />
>>>>>>> 9d8f4cc3d1eaad8e2fb768a30951db06eeb95af9
                    </DelayedSuspense>
                )
            },
            {
<<<<<<< HEAD
                path: "/sitting-sofa",
                element: (
                    <DelayedSuspense>
                        <SittingSofa />
=======
                path: "/wooden-cabbinet",
                element: (
                    <DelayedSuspense>
                        <WoodenCabbinet />
>>>>>>> 9d8f4cc3d1eaad8e2fb768a30951db06eeb95af9
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
                path: 'addCart',
                element: (
                    <DelayedSuspense>
                        <AddCart />
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
