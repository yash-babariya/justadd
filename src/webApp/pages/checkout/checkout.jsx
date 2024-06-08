import React, { useEffect } from 'react';
import './checkout.scss'
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotalPrice } from '../../../redux/cart/cart';
import { FaFileDownload } from 'react-icons/fa';
import { IoBagCheckOutline } from 'react-icons/io5';

export default function Checkout() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    useEffect(() => {
        dispatch(calculateTotalPrice());
    }, [cartItems, dispatch]);
    return (
        <div className='checkout'>
            <div className="container">
                <div className="heading">
                    <h2><IoBagCheckOutline className='icon' />Checkout</h2>
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
    )
}
