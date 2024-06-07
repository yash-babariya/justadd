import React, { useState } from 'react';
import './chain-lemp.scss';
import toast from 'react-hot-toast';
import { FaCartPlus } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCarts, favCarts, removeFromFavCarts } from '../../../../../redux/cart/cart';
import { TbLamp } from "react-icons/tb";
import { categories } from '../../../../../categoriesApi/categoriesApi';


export default function ChainLemp() {
    const Lemps = categories.furniture.Lemps
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
        <div className='chain-lemp'>
            <div className='cart' >
                <Link to="/favcart" className="wishlist-button">
                    <FiHeart className={`icon ${animateFavIcon ? 'pulse-animation' : ''}`} />
                    <span>whishlist</span>
                </Link>
                <div className="container">
                    <div className="heading">
                        <h2><TbLamp />Chain Lemps</h2>
                    </div>
                    <section>
                        {Lemps.map(item => (
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
