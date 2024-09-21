import React, { useEffect } from 'react';
import './addCart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FaOpencart } from "react-icons/fa";
import { calculateTotalPrice, decrementItemQuantity, incrementItemQuantity, removeFromCarts } from '../../../redux/cart/cart';
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function AddCart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice); // Assuming you have a totalPrice in the redux store

    useEffect(() => {
        dispatch(calculateTotalPrice());
    }, [cartItems, dispatch]);

    const handleIncrement = (item) => {
        dispatch(incrementItemQuantity(item));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(decrementItemQuantity(item));
        }
    };

    const handleDelete = (item) => {
        dispatch(removeFromCarts(item));
    };

    return (
        <div className='cart-sec'>
            <div className="container">
                <div className="heading">
                    <h2><FaOpencart className='icon' />Shopping Cart</h2>
                </div>
                <div className="add-carts">
                    {
                        cartItems.length === 0 ? (
                            <div className='no-data-message'>
                                <p>Your cart is empty</p>
                                <Link to="/" className="shop-now-btn">Shop Now</Link>
                            </div>
                        ) : (
                            cartItems.map(item => (
                                <div className='cart-items' key={item.id}>
                                    <div className="cart-img">
                                        <img loading="lazy" src={item.image} alt={item.name} />
                                    </div>
                                    <div className="details">
                                        <h3>{item.name}</h3>
                                        <h4>{item.details}</h4>
                                        <p>Rs.{item.price}</p>
                                        <div className="actions">
                                            <button onClick={() => handleIncrement(item)}>+</button>
                                            <p>Quantity: {item.quantity}</p>
                                            <button
                                                onClick={() => handleDecrement(item)}
                                                disabled={item.quantity === 1}
                                            >-</button>
                                        </div>
                                        <button className='delete-btn' onClick={() => handleDelete(item)}>
                                            <RiDeleteBin5Line className='icon' />Remove from cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
                {
                    cartItems.length > 0 && (
                        <div className="checkout-section">
                            <Link to="/checkout" className="checkout">
                                <button>Checkout <IoBagCheckOutline /></button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
