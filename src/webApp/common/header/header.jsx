import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../../assets/logo/logo.webp';
import { HiUserCircle } from "react-icons/hi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { FiHeart } from "react-icons/fi";

export default function Header() {
    const cartCount = useSelector(state => state.cart.count);
    const favCount = useSelector(state => state.cart.favCount);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
        setIsNavOpen(true);
    }

    const closeNav = () => {
        setIsNavOpen(false);
    }



    return (
        <div className='header-main'>
            <div className={`sidenav ${isNavOpen ? 'open' : ''}`}>
                <div className="closebtn" onClick={closeNav}>&times;</div>
                <Link className="menu-item" to={"/"} onClick={closeNav}>Home</Link>
                <Link className="menu-item" to={"/furniture"} onClick={closeNav}>Furniture</Link>
                <Link className="menu-item" to={"/cosmetics"} onClick={closeNav}>Cosmetic</Link>
                <Link className="menu-item" to={"/profile"} onClick={closeNav}>Profile </Link>
            </div>
            <div className="container">
                <header>
                    <Link to={"/"}>
                        <div className="logo">
                            <img loading="lazy" src={logo} alt="logo" />
                        </div>
                    </Link>
                    <div className="menu">
                        <div className="menu-items"><Link to={"/"}>Home</Link></div>
                        <div className="menu-items"><Link to={"/furniture"}>Furniture</Link> </div>
                        <div className="menu-items"> <Link to={"/cosmetics"}>Cosmetic</Link></div>
                        <div className="menu-items"><Link to={"/profile"}>Profile</Link></div>
                    </div>
                    <div className="buttons">
                        <Link to={"/login"} className="login">
                            <HiUserCircle className='icon' />
                        </Link>
                        <Link to={"/addcart"}>
                            <div className="cart-menu">
                                <PiShoppingCartSimpleFill className='icon' />
                                <span>{cartCount}</span>
                            </div>
                        </Link>
                        <Link to={"/favcart"}>
                            <div className="favcart-menu">
                                <FiHeart className='icon' />
                                <span>{favCount}</span>
                            </div>
                        </Link>
                        <div onClick={openNav} className="menu-bar">
                            <IoMenu className='menu-icon' />
                        </div>
                    </div>
                </header>
            </div >
        </div >
    )
}
