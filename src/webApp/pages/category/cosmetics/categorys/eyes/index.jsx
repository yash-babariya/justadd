import React, { useState } from 'react';
import './Eyes.scss';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts, favCarts, removeFromCarts, removeFromFavCarts } from '../../../../../../redux/cart/cart';;
import faceimg from '../../../../../../assets/images/grid-face.webp';
import toast from 'react-hot-toast';
import { categories } from '../../../../../../categoriesApi/categoriesApi';

export default function Eyes() {
    const eyes = categories.cosmetics.eyes;
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const favItems = useSelector(state => state.cart.favs);
    const [animateFavIcon, setAnimateFavIcon] = useState(false);

    const addProductToCart = (product) => {
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (isProductInCart) {
            dispatch(removeFromCarts(product));

        } else {
            dispatch(addToCarts(product));

        }
    };

    const favoriteProduct = (product) => {
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (isProductInCart) {
            toast.error("Can't add item already in cart.");
            return;
        }
        const isProductInFavs = favItems.some(item => item.id === product.id);
        if (isProductInFavs) {
            dispatch(removeFromFavCarts(product));

        } else {
            dispatch(favCarts(product));

            setAnimateFavIcon(true);
            setTimeout(() => setAnimateFavIcon(false), 500);
        }
    }
    return (
        <div className="eyes">
            <div className='cart' >
                <Link to="/favcart" className="wishlist-button">
                    <FiHeart className={`icon ${animateFavIcon ? 'pulse-animation' : ''}`} />
                    <span>whishlist</span>
                </Link>
                <div className="container">
                    <section>
                        <div className="heading">
                            <img loading="lazy" src={faceimg} alt="face-pic" />
                            <h2>Products</h2>
                        </div>
                        <div className="grid">
                            {eyes.map(item => (
                                <div className='item'
                                    key={item.id}>
                                    <div className="item-image">
                                        <img loading="lazy" src={item.image} alt={item.name} />
                                    </div>
                                    <div className="item-bottom">
                                        <h3>{item.name}</h3>
                                        <p>Rs.{item.price}</p>
                                        <div className="icons">
                                            <FaCartPlus onClick={() => addProductToCart(item)} className={`icon  ${cartItems.some(fav => fav.id === item.id) ? "fill" : ""}`} />
                                            <FiHeart onClick={() => favoriteProduct(item)} className={`icon  ${favItems.some(fav => fav.id === item.id) ? "fill" : ""}`} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
