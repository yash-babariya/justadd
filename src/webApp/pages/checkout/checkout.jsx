import React, { useEffect } from 'react';
import './checkout.scss';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotalPrice } from '../../../redux/cart/cart';
import { FaFileDownload } from 'react-icons/fa';
import { IoBagCheckOutline } from 'react-icons/io5';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function Checkout() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    useEffect(() => {
        dispatch(calculateTotalPrice());
    }, [cartItems, dispatch]);

    const downloadPDF = () => {
        const doc = new jsPDF();
        const tableColumn = ['Product', 'Price', 'Quantity', 'Total'];
        const tableRows = [];

        cartItems.forEach(item => {
            const itemData = [
                item.name,
                `$${item.price}`,
                item.quantity,
                `$${item.price * item.quantity}`
            ];
            tableRows.push(itemData);
        });

        doc.autoTable(tableColumn, tableRows, { startY: 20 });
        doc.text(`Total Price: $${totalPrice}`, 14, doc.autoTable.previous.finalY + 10);
        doc.save('invoice.pdf');
    };

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
                        <button onClick={downloadPDF}>
                            <FaFileDownload />
                            Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
