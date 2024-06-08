import React from 'react'
import './favcart.scss'
import { useDispatch, useSelector } from 'react-redux';
import { LiaHeartSolid } from "react-icons/lia";
import { FiHeart } from 'react-icons/fi';
import { addToCarts, favCarts, removeFromCarts, removeFromFavCarts } from '../../../redux/cart/cart';
import toast from 'react-hot-toast';
import { FaCartPlus } from 'react-icons/fa';

export default function FavCart() {

    const cartItems = useSelector(state => state.cart.items);
    const favItems = useSelector(state => state.cart.favs);
    const dispatch = useDispatch();

    const addProductToCart = (product) => {
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (isProductInCart) {
            dispatch(removeFromCarts(product));
            toast("product removed from cart.", { style: { backgroundColor: "#E8407B", color: "white" } });
        } else {
            dispatch(addToCarts(product));
            dispatch(removeFromFavCarts(product));
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
        <div className='fav-cart'>
            <div className="container">
                <div className="heading">
                    <h2><LiaHeartSolid />Favourite Cart</h2>
                </div>
                <div className="carts">
                    {
                        favItems.map(item => (
                            <div className="fav-cart-items" key={item.id}>
                                <div className="cart-img">
                                    <img loading="lazy" src={item.image} alt={item.name} />
                                </div>
                                <div className="icons">
                                    <FiHeart onClick={() => favoriteProduct(item)} className={`icon  ${favItems.some(fav => fav.id === item.id) ? "fill" : ""}`} />
                                    <FaCartPlus onClick={() => addProductToCart(item)} className={`icon  ${cartItems.some(fav => fav.id === item.id) ? "fill" : ""}`} />
                                </div>
                                <div className="fav-details">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
