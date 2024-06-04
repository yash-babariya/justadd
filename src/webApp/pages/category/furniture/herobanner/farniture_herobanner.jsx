import React, { useState, useRef, useEffect } from 'react';
import './herobanner.scss';
import pic1 from '../../../../../assets/images/cart1.jpg';
import pic2 from '../../../../../assets/images/cart2.jpg';
import pic3 from '../../../../../assets/images/cart3.jpg';
import pic4 from '../../../../../assets/images/cart4.webp';
import pic5 from '../../../../../assets/images/cart5.jpg';
import pic6 from '../../../../../assets/images/cart6.webp';
import { RiCloseCircleFill } from "react-icons/ri";

const products = [
    { id: 'pin1', name: 'Wall Decor', price: 42, image: pic1 },
    { id: 'pin2', name: 'Wooden Sofa', price: 159, image: pic2 },
    { id: 'pin3', name: 'Table lamp', price: 45, image: pic3 },
    { id: 'pin4', name: 'Cushion Cover', price: 6, image: pic4 },
    { id: 'pin5', name: 'SideTable', price: 60, image: pic5 },
    { id: 'pin6', name: 'Window curtain', price: 30, image: pic6 }
];

function Cart({ product, closeCart }) {
    return (
        <aside className="cart" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeCart} className='close-icon' aria-label="Close cart">
                <RiCloseCircleFill />
            </button>
            <figure>
                <img loading="lazy" src={product.image} alt={product.name} />
                <figcaption>
                    <h5>{product.name}</h5>
                    <p>${product.price}</p>
                </figcaption>
            </figure>
        </aside>
    );
}

export default function Herobanner() {
    const [openCartId, setOpenCartId] = useState(null);
    const cartRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setOpenCartId(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleCart = (productId) => {
        setOpenCartId(openCartId === productId ? null : productId);
    };

    return (
        <section className='herobanner-furniture'>
            <div className="container section">
                {products.map(product => (
                    <article key={product.id} className={`pin ${product.id}`} onClick={() => toggleCart(product.id)}>
                        <div className="zoom"></div>
                        <span className="bg">
                            <span>${product.price}</span>
                        </span>
                        {openCartId === product.id && (
                            <div ref={cartRef}>
                                <Cart product={product} closeCart={() => setOpenCartId(null)} />
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}
