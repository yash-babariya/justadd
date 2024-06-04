import React, { useState } from 'react';
import './chair.scss';
import chair1 from '../../../../../assets/images/chair (1).webp';
import chair2 from '../../../../../assets/images/chair (2).webp';
import chair3 from '../../../../../assets/images/chair (3).webp';
import chair4 from '../../../../../assets/images/chair (4).webp';
import chair5 from '../../../../../assets/images/chair (5).webp';
import chair6 from '../../../../../assets/images/chair (6).webp';
import chair7 from '../../../../../assets/images/chair (7).webp';
import chair8 from '../../../../../assets/images/chair (8).webp';
import chair9 from '../../../../../assets/images/chair (9).webp';
import chair10 from '../../../../../assets/images/chair (10).webp';
import chair11 from '../../../../../assets/images/chair (11).webp';
import chair12 from '../../../../../assets/images/chair (12).webp';
import chair13 from '../../../../../assets/images/chair (13).webp';
import chair14 from '../../../../../assets/images/chair (14).webp';
import chair15 from '../../../../../assets/images/chair (15).webp';
import chair16 from '../../../../../assets/images/chair (16).webp';
import chair17 from '../../../../../assets/images/chair (17).webp';
import chair18 from '../../../../../assets/images/chair (18).webp';
import chair19 from '../../../../../assets/images/chair (19).webp';
import chair20 from '../../../../../assets/images/chair (20).webp';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts, favCarts, removeFromFavCarts } from '../../../../../redux/cart/cart';
import { PiOfficeChairFill } from "react-icons/pi";
import toast from 'react-hot-toast';


const chairs = [
    {
        id: 1,
        name: 'Classic Wood Chair',
        image: chair1,
        price: 123,
        size: 'small',
        details: 'Handcrafted from solid oak, this chair features a timeless design and a smooth finish. Ideal for any dining room or kitchen setting.',
    },
    {
        id: 2,
        name: 'Modern Lounge Chair',
        image: chair2,
        price: 210,
        size: 'medium',
        details: 'A sleek and stylish lounge chair with a minimalist design. Made from high-quality beech wood, perfect for contemporary interiors.',
    },
    {
        id: 3,
        name: 'Rustic Armchair',
        image: chair3,
        price: 350,
        size: 'large',
        details: 'This rustic armchair combines comfort with a vintage look. Crafted from reclaimed wood and upholstered in durable fabric.',
    },
    {
        id: 4,
        name: 'Ergonomic Office Chair',
        image: chair4,
        price: 250,
        size: 'medium',
        details: 'Designed for maximum comfort during long working hours. Features adjustable height, lumbar support, and a swivel base.',
    },
    {
        id: 5,
        name: 'Outdoor Patio Chair',
        image: chair5,
        price: 180,
        size: 'medium',
        details: 'Weather-resistant and durable, this patio chair is perfect for outdoor use. Made from treated wood to withstand the elements.',
    },
    {
        id: 6,
        name: 'Elegant Dining Chair',
        image: chair6,
        price: 190,
        size: 'small',
        details: 'Elegant and comfortable, this dining chair is upholstered in premium fabric and features a sturdy wooden frame.',
    },
    {
        id: 7,
        name: 'Compact Folding Chair',
        image: chair7,
        price: 75,
        size: 'small',
        details: 'Portable and easy to store, this folding chair is perfect for extra seating when needed. Made from lightweight but strong wood.',
    },
    {
        id: 8,
        name: 'Rocking Chair',
        image: chair8,
        price: 220,
        size: 'large',
        details: 'A classic rocking chair made from high-quality pine wood. Ideal for relaxing on the porch or in the living room.',
    },
    {
        id: 9,
        name: 'Children\'s Play Chair',
        image: chair9,
        price: 90,
        size: 'small',
        details: 'Designed for children, this play chair is safe, sturdy, and colorful. Made from non-toxic materials.',
    },
    {
        id: 10,
        name: 'Reclining Lounge Chair',
        image: chair10,
        price: 300,
        size: 'large',
        details: 'This reclining lounge chair offers ultimate comfort with its adjustable backrest and padded seat. Perfect for living rooms.',
    },
    {
        id: 11,
        name: 'Vintage Bistro Chair',
        image: chair11,
        price: 140,
        size: 'small',
        details: 'Add a touch of charm to your dining area with this vintage bistro chair. Made from wrought iron and wood.',
    },
    {
        id: 12,
        name: 'Wicker Chair',
        image: chair12,
        price: 200,
        size: 'medium',
        details: 'Stylish and durable, this wicker chair is perfect for both indoor and outdoor use. Made from high-quality wicker and wood.',
    },
    {
        id: 13,
        name: 'Executive Office Chair',
        image: chair13,
        price: 275,
        size: 'medium',
        details: 'A luxurious office chair with leather upholstery and wood accents. Provides excellent support and comfort for executives.',
    },
    {
        id: 14,
        name: 'Mid-Century Modern Chair',
        image: chair14,
        price: 230,
        size: 'medium',
        details: 'This mid-century modern chair features clean lines and a wooden frame. Perfect for any stylish home or office.',
    },
    {
        id: 15,
        name: 'Bohemian Style Chair',
        image: chair15,
        price: 195,
        size: 'medium',
        details: 'Add a bohemian flair to your space with this chair. Made from natural wood and rattan, it is both comfortable and unique.',
    },
    {
        id: 16,
        name: 'High Back Dining Chair',
        image: chair16,
        price: 180,
        size: 'large',
        details: 'Elegant high back dining chair with a cushioned seat. Made from solid wood and upholstered in premium fabric.',
    },
    {
        id: 17,
        name: 'Minimalist Wooden Chair',
        image: chair17,
        price: 160,
        size: 'small',
        details: 'A minimalist wooden chair with a sleek design. Made from high-quality oak and perfect for modern interiors.',
    },
    {
        id: 18,
        name: 'Traditional Wooden Chair',
        image: chair18,
        price: 175,
        size: 'medium',
        details: 'This traditional wooden chair features intricate carvings and a comfortable seat. Ideal for classic dining rooms.',
    },
    {
        id: 19,
        name: 'Swivel Bar Stool',
        image: chair19,
        price: 130,
        size: 'small',
        details: 'Perfect for your home bar or kitchen island, this swivel bar stool is made from sturdy wood and has a comfortable footrest.',
    },
    {
        id: 20,
        name: 'Adirondack Chair',
        image: chair20,
        price: 220,
        size: 'large',
        details: 'Relax in style with this classic Adirondack chair. Made from weather-resistant wood, ideal for outdoor lounging.',
    }
];

export default function Chair() {
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
        <div className="chair">
            <div className='cart' >
                <Link to="/favcart" className="wishlist-button">
                    <FiHeart className={`icon ${animateFavIcon ? 'pulse-animation' : ''}`} />
                    <span>whishlist</span>
                </Link>
                <div className="container">
                    <div className="heading">
                        <h2><PiOfficeChairFill />wood chair</h2>
                    </div>
                    <section>
                        {chairs.map(item => (
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
