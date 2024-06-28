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
                <Link className="menu-item" to={"/"}>Home</Link>
                <div className='menu-item category' onClick={toggleDropdown} >Category<FaCaretDown /></div>
                <div className={`dropdown-category ${dropdownOpen ? 'open' : ''}`}>
                    <Link to={'/furniture'} onClick={closeNav}>Furniture</Link>
                    <Link to={'home/cosmetics'} onClick={closeNav}>Cosmetic</Link>
                    <Link to={'/electronics'} onClick={closeNav}>Electronics</Link>
                    <Link to={'/clothes'} onClick={closeNav}>Clothes</Link>
                </div>
                <Link className="menu-item" to={"/shop"} onClick={closeNav}>Shop</Link>
                <Link className="menu-item" to={"/profile"} onClick={closeNav}>Profile </Link>
            </div>
            <div className="container">
                <header>
                    <div className="menu">
                        <div className="menu-items"><Link to={"/"}>Home</Link></div>
                        <div className="menu-items category">
                            <Link>Category</Link>
                            <div className="drop-down">
                                <Link to={"/home/furniture"}>Furniture</Link>
                                <Link to={"home/cosmetics"}>Cosmetic</Link>
                                <Link>Electronics</Link>
                                <Link>Clothes</Link>
                            </div>
                        </div>
                        <div className="menu-items"><Link to={"/shop"}>Shop</Link></div>
                        <div className="menu-items"><Link to={"/profile"}>Profile</Link></div>
                    </div>
                    <Link to={"/"}>
                        <div className="logo">
                            <img loading="lazy" src={logo} alt="logo" />
                        </div>
                    </Link>
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
