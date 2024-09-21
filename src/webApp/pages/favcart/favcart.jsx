import React from 'react';
import './favcart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { LiaHeartSolid } from "react-icons/lia";
import { FiHeart } from 'react-icons/fi';
import { addToCarts, favCarts, removeFromCarts, removeFromFavCarts } from '../../../redux/cart/cart';
import toast from 'react-hot-toast';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function FavCart() {
    const cartItems = useSelector(state => state.cart.items);
    const favItems = useSelector(state => state.cart.favs);
    const dispatch = useDispatch();

    const addProductToCart = (product) => {
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (isProductInCart) {
            dispatch(removeFromCarts(product));
        } else {
            dispatch(addToCarts(product));
            dispatch(removeFromFavCarts(product));
        }
    };

    const toggleFavorite = (product) => {
        const isProductFavorited = favItems.some(item => item.id === product.id);
        if (isProductFavorited) {
            dispatch(removeFromFavCarts(product));
        } else {
            dispatch(favCarts(product));
        }
    };

    return (
        <div className='fav-cart'>
            <div className="container">
                <div className="heading">
                    <h2><LiaHeartSolid /> Favourite Cart</h2>
                </div>
                {/* Conditionally render either the grid of favorite items or the empty cart message */}
                {favItems.length > 0 ? (
                    <div className="carts">
                        {favItems.map(item => (
                            <div className="fav-cart-items" key={item.id}>
                                <div className="cart-img">
                                    <img loading="lazy" src={item.image} alt={item.name} />
                                </div>
                                <div className="icons">
                                    <div onClick={() => toggleFavorite(item)} aria-label={`Toggle favorite for ${item.name}`}>
                                        <FiHeart className={`icon ${favItems.some(fav => fav.id === item.id) ? "fill" : ""}`} />
                                    </div>
                                    <div onClick={() => addProductToCart(item)} aria-label={`Add ${item.name} to cart`}>
                                        <FaCartPlus className={`icon ${cartItems.some(cartItem => cartItem.id === item.id) ? "fill" : ""}`} />
                                    </div>
                                </div>
                                <div className="fav-details">
                                    <h3>{item.name}</h3>
                                    <p>Rs.{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="empty-cart">
                        <h3>No items in your favorite cart</h3>
                        <Link to={'/'} className="shop-now-btn" onClick={() => toast('Redirecting to shop page')}>
                            Shop Now
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
