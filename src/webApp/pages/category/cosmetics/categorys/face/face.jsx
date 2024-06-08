import React, { useState } from 'react';
import './face.scss';
import faceimg from '../../../../../../assets/images/grid-face.webp';
import faceProduct1 from '../../../../../../assets/images/face-ABSOLUTE FACE STYLIST BLUSH DUOS-1.webp';
import faceProduct2 from '../../../../../../assets/images/face-GLITTERATI FACE PALETTE-2.webp';
import faceProduct3 from '../../../../../../assets/images/face-FACELIFT FOUNDATION STICK-3.webp';
import faceProduct4 from '../../../../../../assets/images/face-FACELIFT MULTISLAYER BLUSH STICK-4.webp';
import faceProduct5 from '../../../../../../assets/images/face-FACELIFT MULTISLAYER HIGHLIGHTER STICK-5.webp';
import faceProduct6 from '../../../../../../assets/images/face-FACELIFT MULTISLAYER CONTOUR STICK-6.webp';
import faceProduct7 from '../../../../../../assets/images/face-ABSOLUTE FACELIFT PALETTE 15G-7.webp';
import faceProduct8 from '../../../../../../assets/images/face-9 TO 5 PRIMER + MATTE PERFECT COVER FOUNDATION MINI-9.webp';
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts, favCarts, removeFromFavCarts } from '../../../../../../redux/cart/cart';
import toast from 'react-hot-toast';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const faceProducts = [
    {
        id: 1001,
        name: 'absolute face stylist blush duos',
        image: faceProduct1,
        price: 2,
        details: "Create a flawless flush with our Absolute Face Stylist Blush Duos. Featuring complementary shades for contouring and highlighting, this versatile duo adds dimension and radiance to your complexion."
    },
    {
        id: 1002,
        name: 'glitterati face palette',
        image: faceProduct2,
        price: 4,
        details: "Elevate your makeup game with our Glitterati Face Palette. This all-in-one palette features an array of sparkling shades for eyes, cheeks, and face, allowing you to create endless dazzling looks."
    },
    {
        id: 1003,
        name: 'facelift foundation stick',
        image: faceProduct3,
        price: 2,
        details: "Achieve a flawless complexion with our Facelift Foundation Stick. This creamy, blendable formula effortlessly evens out skin tone and provides buildable coverage for a natural-looking finish."
    },
    {
        id: 1004,
        name: 'facelift multislayer blush stick',
        image: faceProduct4,
        price: 3,
        details: "Get a rosy glow with our Facelift Multilayer Blush Stick. This innovative stick blush features multiple layers of complementary shades for a natural flush and radiant finish."
    },
    {
        id: 1005,
        name: 'facelift multislayer highlighter stick',
        image: faceProduct5,
        price: 5,
        details: "Illuminate your features with our Facelift Multilayer Highlighter Stick. This multi-dimensional highlighter features layers of shimmering hues to enhance your natural radiance and create a luminous glow."
    },
    {
        id: 1006,
        name: 'facelift multislayer contour stick',
        image: faceProduct6,
        price: 3,
        details: "Define and sculpt your features with our Facelift Multilayer Contour Stick. This versatile contour stick features multiple layers of matte and shimmer shades to contour, highlight, and define your facial contours.",
    },
    {
        id: 1007,
        name: 'absolute facelift palette 15g',
        image: faceProduct7,
        price: 2,
        details: "Achieve a flawless complexion with our Absolute Facelift Palette. This all-in-one palette features everything you need to perfect your makeup look, including foundation, concealer, and setting powder.",
    },
    {
        id: 1008,
        name: '9 to 5 primer + matte perfect cover foundation mini',
        image: faceProduct8,
        price: 1,
        details: "Start your makeup routine off right with our 9 to 5 Primer + Matte Perfect Cover Foundation Mini. This two-in-one"

    }
];



export default function Face() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const favItems = useSelector(state => state.cart.favs);
    const [animateFavIcon, setAnimateFavIcon] = useState(false);


    const addProductToCart = (product) => {
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (isProductInCart) {
            toast("remove from whishlist.", { style: { backgroundColor: "#E8407B", color: "white" } });
        } else {
            dispatch(addToCarts(product));
            toast.success("product added to cart successfully");
        }
    };


    const favoriteProduct = (product) => {
        const isProductInCart = favItems.some(item => item.id === product.id);
        if (isProductInCart) {
            dispatch(removeFromFavCarts(product));
            toast("Product removed from favorite list", { style: { backgroundColor: "#E8407B", color: "white" } });
        } else {
            dispatch(favCarts(product));
            toast.success("product added to favorite list successfully");
            setAnimateFavIcon(true);
            setTimeout(() => setAnimateFavIcon(false), 500);
        }
    }


    return (
        <div className='face'>
            <Link to="/favcart" className="wishlist-button">
                <FiHeart className={`icon ${animateFavIcon ? 'pulse-animation' : ''}`} />
                <span>whishlist</span>
            </Link>
            <div className="container">
                <section>
                    <div className="heading">
                        <img loading="lazy" src={faceimg} alt="face-pic" />
                        <h2>Face</h2>
                    </div>

                    <div className="grid">
                        {
                            faceProducts.map(product => (
                                <div key={product.id} className="grid-item">
                                    <div className="wishlist-icon">
                                        <FiHeart onClick={() => favoriteProduct(product)} className={`icon heart-icon ${favItems.some(fav => fav.id === product.id) ? "favorite" : ""}`} />
                                    </div>
                                    <div className="category-img">
                                        <img loading="lazy" src={product.image} alt={product.name} />
                                    </div>
                                    <h3>{product.name}</h3>
                                    <p>price: ${product.price}</p>
                                    <div className="add-cart-btn">
                                        <button onClick={() => addProductToCart(product)}><PiShoppingCartSimpleFill className='icon' />Add to cart</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}
