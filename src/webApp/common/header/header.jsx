import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../../assets/logo/logo.webp';
import { HiUserCircle } from "react-icons/hi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { FiHeart } from "react-icons/fi";
import { clearUsers } from '../../../redux/form/form';

export default function Header() {
    const dipatch = useDispatch();
    const cartCount = useSelector(state => state.cart.count);
    const favCount = useSelector(state => state.cart.favCount);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
        setIsNavOpen(true);
    }

    const closeNav = () => {
        setIsNavOpen(false);
    }

    const logout = () => {
        dipatch(clearUsers());
        window.location.reload();
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    return (
        <div className='header-main'>
            <div className={`sidenav ${isNavOpen ? 'open' : ''}`}>
                <div className="closebtn" onClick={closeNav}>&times;</div>
                <Link className="menu-item" to={"/"} onClick={closeNav}>Home</Link>
                <Link className="menu-item" to={"/home/furniture"} onClick={closeNav}>Furniture</Link>
                <Link className="menu-item" to={"home/cosmetics"} onClick={closeNav}>Cosmetic</Link>
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
                        <div className="menu-items"><Link to={"/home/furniture"}>Furniture</Link> </div>
                        <div className="menu-items"> <Link to={"home/cosmetics"}>Cosmetic</Link></div>
                        <div className="menu-items"><Link to={"/profile"}>Profile</Link></div>
                    </div>
                    <div className="buttons">
                        <div className="login">
                            <HiUserCircle className='icon' />
                            <div className="drop-down">
                                <Link to={"/profile"}>Profile</Link>
                                <button onClick={() => logout()} className='logout'>Logout</button>
                            </div>
                        </div>
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
