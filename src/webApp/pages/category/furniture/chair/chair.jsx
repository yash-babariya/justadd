import React, { useState } from 'react';
import './chair.scss';

import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts, favCarts, removeFromCarts, removeFromFavCarts } from '../../../../../redux/cart/cart';
import { PiOfficeChairFill } from "react-icons/pi";
import toast from 'react-hot-toast';
import { categories } from '../../../../../categoriesApi/categoriesApi';

export default function Chair() {
    const chairs = categories.furniture.chairs
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const favItems = useSelector(state => state.cart.favs);
    const [animateFavIcon, setAnimateFavIcon] = useState(false);

    const addProductToCart = (product) => {
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (isProductInCart) {
            dispatch(removeFromCarts(product));
            toast("product removed from cart.", { style: { backgroundColor: "#E8407B", color: "white" } });
        } else {
            dispatch(addToCarts(product));
            toast("product added to cart successfully", { style: { backgroundColor: "#EEBD51", color: "black" } });
        }
    };

    const favoriteProduct = (product) => {
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (isProductInCart) {
            toast("Cannot add to favorites. Product is already in the cart.", { style: { backgroundColor: "#E8407B", color: "white" } });
            return;
        }
        const isProductInFavs = favItems.some(item => item.id === product.id);
        if (isProductInFavs) {
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
                                        <FaCartPlus onClick={() => addProductToCart(item)} className={`icon  ${cartItems.some(fav => fav.id === item.id) ? "fill" : ""}`} />
                                        <FiHeart onClick={() => favoriteProduct(item)} className={`icon  ${favItems.some(fav => fav.id === item.id) ? "fill" : ""}`} />
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
