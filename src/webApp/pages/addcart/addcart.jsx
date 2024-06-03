import React, { useEffect } from 'react';
import './addCart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FaOpencart } from "react-icons/fa";
import { calculateTotalPrice, decrementItemQuantity, incrementItemQuantity, removeFromCarts } from '../../../redux/cart/cart';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaFileDownload } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

export default function AddCart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    useEffect(() => {
        dispatch(calculateTotalPrice());
    }, [cartItems, dispatch]);

    const handleIncrement = (item) => {
        dispatch(incrementItemQuantity(item));
    };

    const handleDecrement = (item) => {
        dispatch(decrementItemQuantity(item));
    };

    const handleDelete = (item) => {
        dispatch(removeFromCarts(item));
    };

    return (
        <div className='cart-sec'>
            <div className="container">
                <div className="heading">
                    <h1><FaOpencart className='icon' />Shopping Cart</h1>
                </div>
                <div className="add-carts">
                    {
                        cartItems.length === 0 ? (
                            <div className='no-data-message'>
                                <p>Your cart is empty</p>
                            </div>
                        ) : (
                            cartItems.map(item => (
                                <div className='cart-items' key={item.id}>
                                    <div className="cart-img">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="details">
                                        <h3>{item.name}</h3>
                                        <h4>{item.details}</h4>
                                        <p>Price: ${item.price}</p>
                                        <div className="actions">
                                            <button onClick={() => handleIncrement(item)}>+</button>
                                            <p>Quantity: {item.quantity}</p>
                                            <button onClick={() => handleDecrement(item)}>-</button>
                                        </div>
                                        <button className='delete-btn' onClick={() => handleDelete(item)}><RiDeleteBin5Line className='icon' />Remove from cart</button>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
                <div className="heading">
                    <h1><FaFileAlt className='icon' />Total</h1>
                </div>
                <div className="cart-table-container">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="total">
                        <p>Total Price: ${totalPrice}</p>
                    </div>
                    <div className="invoice">
                        <button>
                            <FaFileDownload />
                            Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

