import React, { useState } from 'react'
import './stool.scss'
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts, favCarts, removeFromFavCarts } from '../../../../../redux/cart/cart';
import toast from 'react-hot-toast';
import { FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import stool1 from '../../../../../assets/images/stool (1).webp';
import stool2 from '../../../../../assets/images/stool (2).webp';
import stool3 from '../../../../../assets/images/stool (3).webp';
import stool4 from '../../../../../assets/images/stool (4).webp';
import stool5 from '../../../../../assets/images/stool (5).webp';
import stool6 from '../../../../../assets/images/stool (6).webp';
import stool7 from '../../../../../assets/images/stool (7).webp';
import stool8 from '../../../../../assets/images/stool (8).webp';
import stool9 from '../../../../../assets/images/stool (9).webp';
import stool10 from '../../../../../assets/images/stool (10).webp';
import stool11 from '../../../../../assets/images/stool (11).webp';
import stool12 from '../../../../../assets/images/stool (12).webp';
import stool13 from '../../../../../assets/images/stool (13).webp';
import stool14 from '../../../../../assets/images/stool (14).webp';
import stool15 from '../../../../../assets/images/stool (15).webp';
import stool16 from '../../../../../assets/images/stool (16).webp';
import stool17 from '../../../../../assets/images/stool (17).webp';
import stool18 from '../../../../../assets/images/stool (18).webp';
import stool19 from '../../../../../assets/images/stool (19).webp';
import stool20 from '../../../../../assets/images/stool (20).webp';
import { PiStoolFill } from "react-icons/pi";

const stools = [
    {
        id: 1,
        image: stool1,
        name: "Classic Wood Stool",
        price: 50,
        size: "Small",
        details: "A simple yet elegant wood stool, perfect for any kitchen or dining area. Crafted from high-quality oak with a smooth finish.",
    },
    {
        id: 2,
        image: stool2,
        name: "Adjustable Bar Stool",
        price: 70,
        size: "Medium",
        details: "This bar stool features an adjustable height mechanism and a sleek, modern design. Made from durable metal and wood.",
    },
    {
        id: 3,
        image: stool3,
        name: "Rustic Farmhouse Stool",
        price: 55,
        size: "Large",
        details: "Add a rustic touch to your home with this farmhouse-style stool. Made from reclaimed wood and finished with a weathered look.",
    },
    {
        id: 4,
        image: stool4,
        name: "Compact Folding Stool",
        price: 45,
        size: "Small",
        details: "Portable and easy to store, this folding stool is perfect for extra seating when needed. Made from lightweight but strong materials.",
    },
    {
        id: 5,
        image: stool5,
        name: "Industrial Metal Stool",
        price: 60,
        size: "Medium",
        details: "A sturdy and stylish metal stool with an industrial design. Ideal for modern kitchens and bars.",
    },
    {
        id: 6,
        image: stool6,
        name: "Elegant Vanity Stool",
        price: 80,
        size: "Large",
        details: "This vanity stool features plush upholstery and a wooden frame. Perfect for adding a touch of elegance to your dressing area.",
    },
    {
        id: 7,
        image: stool7,
        name: "Modern Plastic Stool",
        price: 40,
        size: "Small",
        details: "A minimalist stool made from high-quality plastic. Lightweight, durable, and easy to clean.",
    },
    {
        id: 8,
        image: stool8,
        name: "Retro Diner Stool",
        price: 65,
        size: "Medium",
        details: "Bring back the 50s with this retro diner stool. Features a chrome base and a comfortable padded seat.",
    },
    {
        id: 9,
        image: stool9,
        name: "Wicker Stool",
        price: 75,
        size: "Large",
        details: "Stylish and durable, this wicker stool is perfect for both indoor and outdoor use. Made from high-quality wicker and a sturdy frame.",
    },
    {
        id: 10,
        image: stool10,
        name: "Children's Play Stool",
        price: 35,
        size: "Small",
        details: "Designed for children, this play stool is safe, sturdy, and colorful. Made from non-toxic materials.",
    },
    {
        id: 11,
        image: stool11,
        name: "Swivel Bar Stool",
        price: 70,
        size: "Medium",
        details: "Perfect for your home bar or kitchen island, this swivel bar stool is made from sturdy wood and has a comfortable footrest.",
    },
    {
        id: 12,
        image: stool12,
        name: "Piano Stool",
        price: 90,
        size: "Large",
        details: "An adjustable piano stool with a cushioned seat. Provides excellent comfort and support for long playing sessions.",
    },
    {
        id: 13,
        image: stool13,
        name: "Outdoor Patio Stool",
        price: 55,
        size: "Small",
        details: "Weather-resistant and durable, this patio stool is perfect for outdoor use. Made from treated wood to withstand the elements.",
    },
    {
        id: 14,
        image: stool14,
        name: "Luxury Leather Stool",
        price: 100,
        size: "Medium",
        details: "A luxurious leather stool with a padded seat and backrest. Ideal for adding a touch of elegance to any room.",
    },
    {
        id: 15,
        image: stool15,
        name: "Ergonomic Office Stool",
        price: 85,
        size: "Large",
        details: "Designed for comfort during long working hours. Features adjustable height and a swivel base.",
    },
    {
        id: 16,
        image: stool16,
        name: "Mid-Century Modern Stool",
        price: 70,
        size: "Small",
        details: "This mid-century modern stool features clean lines and a wooden frame. Perfect for any stylish home or office.",
    },
    {
        id: 17,
        image: stool17,
        name: "Bohemian Style Stool",
        price: 65,
        size: "Medium",
        details: "Add a bohemian flair to your space with this stool. Made from natural wood and rattan, it is both comfortable and unique.",
    },
    {
        id: 18,
        image: stool18,
        name: "Minimalist Stool",
        price: 50,
        size: "Large",
        details: "A minimalist stool with a sleek design. Made from high-quality materials and perfect for modern interiors.",
    },
    {
        id: 19,
        image: stool19,
        name: "Traditional Wooden Stool",
        price: 55,
        size: "Small",
        details: "This traditional wooden stool features intricate carvings and a comfortable seat. Ideal for classic dining rooms.",
    },
    {
        id: 20,
        image: stool20,
        name: "Vintage Bistro Stool",
        price: 60,
        size: "Medium",
        details: "Add a touch of charm to your dining area with this vintage bistro stool. Made from wrought iron and wood.",
    },
];



export default function Stool() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const favItems = useSelector(state => state.cart.favs);
    const [animateFavIcon, setAnimateFavIcon] = useState(false);

    const addProductToCart = (product) => {
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (isProductInCart) {
            toast("This product is already in your cart.", { style: { backgroundColor: "#E8407B", color: "white" } });
        } else {
            dispatch(addToCarts(product));
            toast("product added to cart successfully", { style: { backgroundColor: "#EEBD51", color: "black" } });
        }
    };

    const favoriteProduct = (product) => {
        const isProductInCart = favItems.some(item => item.id === product.id);
        if (isProductInCart) {
            dispatch(removeFromFavCarts(product));
            toast("Product removed from favorite list", { style: { backgroundColor: "#E8407B", color: "white" } });
        } else {
            dispatch(favCarts(product));
            toast("product added to favorite list successfully", { style: { backgroundColor: "#EEBD51", color: "black" } });
            setAnimateFavIcon(true);
            setTimeout(() => setAnimateFavIcon(false), 500);
        }
    }

    return (
        <div className="stool">
            <div className='cart' >
                <Link to="/favcart" className="wishlist-button">
                    <FiHeart className={`icon ${animateFavIcon ? 'pulse-animation' : ''}`} />
                    <span>whishlist</span>
                </Link>
                <div className="container">
                    <div className="heading">
                        <h2><PiStoolFill />Stool</h2>
                    </div>
                    <section>
                        {stools.map(item => (
                            <div className='item'
                                key={item.id}>
                                <div className="item-image">
                                    <img loading="lazy" src={item.image} alt={item.name} />
                                </div>
                                <h3>{item.name}</h3>
                                <div className="item-bottom">
                                    <p>price : ${item.price}</p>
                                    <div className="icons">
                                        <FaCartPlus onClick={() => addProductToCart(item)} className='icon' />
                                        <FiHeart onClick={() => favoriteProduct(item)} className={`icon heart-icon ${favItems.some(fav => fav.id === item.id) ? "favorite" : ""}`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}
