import React, { useState } from 'react';
import './chair.scss';
import chair1 from '../../../../../assets/images/chair (1).webp';
import chair2 from '../../../../../assets/images/chair (2).webp';
import chair3 from '../../../../../assets/images/chair (3).webp';
import chair4 from '../../../../../assets/images/chair (4).webp';
import chair5 from '../../../../../assets/images/chair (5).webp';
import chair6 from '../../../../../assets/images/chair (6).webp';
import chair7 from '../../../../../assets/images/chair (7).webp';
import chair8 from '../../../../../assets/images/chair (8).webp';
import chair9 from '../../../../../assets/images/chair (9).webp';
import chair10 from '../../../../../assets/images/chair (10).webp';
import chair11 from '../../../../../assets/images/chair (11).webp';
import chair12 from '../../../../../assets/images/chair (12).webp';
import chair13 from '../../../../../assets/images/chair (13).webp';
import chair14 from '../../../../../assets/images/chair (14).webp';
import chair15 from '../../../../../assets/images/chair (15).webp';
import chair16 from '../../../../../assets/images/chair (16).webp';
import chair17 from '../../../../../assets/images/chair (17).webp';
import chair18 from '../../../../../assets/images/chair (18).webp';
import chair19 from '../../../../../assets/images/chair (19).webp';
import chair20 from '../../../../../assets/images/chair (20).webp';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts, favCarts, removeFromFavCarts } from '../../../../../redux/cart/cart';
import { PiOfficeChairFill } from "react-icons/pi";


const chairs = [
    {
        id: 1,
        name: 'wood chair',
        image: chair1,
        price: 123,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',

    },
    {
        id: 2,
        name: 'wood chair',
        image: chair2,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 3,
        name: 'wood chair',
        image: chair3,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 4,
        name: 'wood chair',
        image: chair4,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 5,
        name: 'wood chair',
        image: chair5,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 6,
        name: 'wood chair',
        image: chair6,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 7,
        name: 'wood chair',
        image: chair7,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 8,
        name: 'wood chair',
        image: chair8,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 9,
        name: 'wood chair',
        image: chair9,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 10,
        name: 'wood chair',
        image: chair10,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 11,
        name: 'wood chair',
        image: chair11,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 12,
        name: 'wood chair',
        image: chair12,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 13,
        name: 'wood chair',
        image: chair13,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 14,
        name: 'wood chair',
        image: chair14,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 15,
        name: 'wood chair',
        image: chair15,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 16,
        name: 'wood chair',
        image: chair16,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 17,
        name: 'wood chair',
        image: chair17,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 18,
        name: 'wood chair',
        image: chair18,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 19,
        name: 'wood chair',
        image: chair19,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    },
    {
        id: 20,
        name: 'wood chair',
        image: chair20,
        price: 210,
        size: 'small',
        details: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.',
    }
]
export default function Chair() {
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
