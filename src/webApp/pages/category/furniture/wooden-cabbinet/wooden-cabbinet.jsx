import React, { useState } from 'react';
import './wooden-cabbinet.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts, favCarts, removeFromFavCarts } from '../../../../../redux/cart/cart';
import { FiHeart } from 'react-icons/fi';
import { FaCartPlus } from 'react-icons/fa';
import { BiCabinet } from "react-icons/bi";
import { Link } from 'react-router-dom';
import cabinet1 from '../../../../../assets/images/cabbinet (1).webp';
import cabinet2 from '../../../../../assets/images/cabbinet (2).webp';
import cabinet3 from '../../../../../assets/images/cabbinet (3).webp';
import cabinet4 from '../../../../../assets/images/cabbinet (4).webp';
import cabinet5 from '../../../../../assets/images/cabbinet (5).webp';
import cabinet6 from '../../../../../assets/images/cabbinet (6).webp';
import cabinet7 from '../../../../../assets/images/cabbinet (7).webp';
import cabinet8 from '../../../../../assets/images/cabbinet (8).webp';
import cabinet9 from '../../../../../assets/images/cabbinet (9).webp';
import cabinet10 from '../../../../../assets/images/cabbinet (10).webp';
import cabinet11 from '../../../../../assets/images/cabbinet (11).webp';
import cabinet12 from '../../../../../assets/images/cabbinet (12).webp';
import cabinet13 from '../../../../../assets/images/cabbinet (13).webp';
import cabinet14 from '../../../../../assets/images/cabbinet (14).webp';
import cabinet15 from '../../../../../assets/images/cabbinet (15).webp';
import cabinet16 from '../../../../../assets/images/cabbinet (16).webp';
import cabinet17 from '../../../../../assets/images/cabbinet (17).webp';
import cabinet18 from '../../../../../assets/images/cabbinet (18).webp';
import cabinet19 from '../../../../../assets/images/cabbinet (19).webp';
import cabinet20 from '../../../../../assets/images/cabbinet (20).webp';
import toast from 'react-hot-toast';


const WoodenCabinets = [
    {
        id: 1,
        image: cabinet1,
        name: "Rustic Charm Cabinet",
        price: 199,
        sizes: ["Small", "Medium"],
        details: "This versatile wooden cabinet brings a touch of rustic charm to any space. Ideal for storing household essentials, its sturdy construction and spacious shelves ensure durability and ample storage."
    },
    {
        id: 2,
        image: cabinet2,
        name: "Elegant Heritage Cabinet",
        price: 299,
        sizes: ["Medium", "Large"],
        details: "Crafted from high-quality wood, this elegant cabinet features a timeless design that complements any decor. With multiple shelves and a sleek finish, it offers both functionality and style."
    },
    {
        id: 3,
        image: cabinet3,
        name: "Classic Organizer Cabinet",
        price: 249,
        sizes: ["Small", "Medium"],
        details: "Enhance your home storage with this classic wooden cabinet. Perfect for organizing your belongings, it combines durability with a stylish design that fits seamlessly into any room."
    },
    {
        id: 4,
        image: cabinet4,
        name: "Spacious Elegance Cabinet",
        price: 349,
        sizes: ["Large", "Extra Large"],
        details: "This spacious wooden cabinet provides ample storage for all your needs. Its solid construction and elegant design make it a standout piece in any living space."
    },
    {
        id: 5,
        image: cabinet5,
        name: "Compact Utility Cabinet",
        price: 179,
        sizes: ["Small", "Medium"],
        details: "Bring functionality and style to your home with this compact wooden cabinet. Ideal for smaller spaces, it offers sturdy storage without compromising on aesthetics."
    },
    {
        id: 6,
        image: cabinet6,
        name: "Sophisticated Storage Cabinet",
        price: 399,
        sizes: ["Large", "Extra Large"],
        details: "Featuring a beautiful finish and robust construction, this large wooden cabinet is perfect for organizing larger items. Its elegant design adds a touch of sophistication to any room."
    },
    {
        id: 7,
        image: cabinet7,
        name: "Mid-Century Modern Cabinet",
        price: 279,
        sizes: ["Medium", "Large"],
        details: "This mid-sized wooden cabinet combines classic style with practical storage solutions. With its durable shelves and timeless look, it's a great addition to any home."
    },
    {
        id: 8,
        image: cabinet8,
        name: "Contemporary Grandeur Cabinet",
        price: 319,
        sizes: ["Large", "Extra Large"],
        details: "This large wooden cabinet offers a perfect blend of contemporary design and practical storage. Its spacious interior and sleek appearance make it a stylish addition to any modern home."
    },
    {
        id: 9,
        image: cabinet9,
        name: "Vintage Elegance Cabinet",
        price: 229,
        sizes: ["Small", "Medium"],
        details: "Add a touch of vintage elegance to your home with this charming wooden cabinet. Its sturdy construction and classic design make it both functional and beautiful."
    },
    {
        id: 10,
        image: cabinet10,
        name: "Modern Minimalist Cabinet",
        price: 269,
        sizes: ["Medium", "Large"],
        details: "This minimalist wooden cabinet is perfect for modern homes. Its sleek design and ample storage space make it a practical and stylish addition to any room."
    },
    {
        id: 11,
        image: cabinet11,
        name: "Country Cottage Cabinet",
        price: 189,
        sizes: ["Small", "Medium"],
        details: "Bring the cozy charm of a country cottage into your home with this wooden cabinet. Ideal for small spaces, it provides practical storage with a rustic touch."
    },
    {
        id: 12,
        image: cabinet12,
        name: "Urban Chic Cabinet",
        price: 309,
        sizes: ["Medium", "Large"],
        details: "This chic wooden cabinet blends urban style with practical storage solutions. Its modern design and sturdy construction make it a versatile piece for any living space."
    },
    {
        id: 13,
        image: cabinet13,
        name: "Scandinavian Simplicity Cabinet",
        price: 219,
        sizes: ["Small", "Medium"],
        details: "Embrace Scandinavian simplicity with this sleek wooden cabinet. Its minimalist design and functional storage options make it a perfect addition to contemporary homes."
    },
    {
        id: 14,
        image: cabinet14,
        name: "Industrial Loft Cabinet",
        price: 339,
        sizes: ["Large", "Extra Large"],
        details: "This industrial-style wooden cabinet is ideal for lofts and modern homes. Its robust construction and spacious interior provide ample storage while adding a stylish touch."
    },
    {
        id: 15,
        image: cabinet15,
        name: "Coastal Breeze Cabinet",
        price: 249,
        sizes: ["Medium", "Large"],
        details: "Capture the essence of coastal living with this breezy wooden cabinet. Perfect for beach-themed interiors, it offers practical storage with a touch of seaside charm."
    },
    {
        id: 16,
        image: cabinet16,
        name: "Farmhouse Classic Cabinet",
        price: 299,
        sizes: ["Large", "Extra Large"],
        details: "This farmhouse-style wooden cabinet combines rustic charm with modern functionality. Its spacious shelves and solid construction make it a practical and stylish addition to any home."
    },
    {
        id: 17,
        image: cabinet17,
        name: "Art Deco Cabinet",
        price: 289,
        sizes: ["Medium", "Large"],
        details: "Add a touch of Art Deco elegance to your home with this stylish wooden cabinet. Its unique design and ample storage space make it a standout piece in any room."
    },
    {
        id: 18,
        image: cabinet18,
        name: "Bohemian Chic Cabinet",
        price: 199,
        sizes: ["Small", "Medium"],
        details: "This bohemian-style wooden cabinet is perfect for eclectic interiors. Its colorful design and practical storage options make it a fun and functional addition to any space."
    },
    {
        id: 19,
        image: cabinet19,
        name: "Traditional Grandeur Cabinet",
        price: 359,
        sizes: ["Large", "Extra Large"],
        details: "This traditional wooden cabinet exudes grandeur and elegance. Its spacious interior and classic design make it a perfect storage solution for formal living spaces."
    },
    {
        id: 20,
        image: cabinet20,
        name: "Transitional Harmony Cabinet",
        price: 269,
        sizes: ["Medium", "Large"],
        details: "Blend traditional and contemporary styles with this transitional wooden cabinet. Its versatile design and ample storage make it a perfect addition to any home decor."
    }
];





export default function WoodenCabbinet() {
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
        <div className='wooden-cabbinet'>
            <div className='cart' >
                <Link to="/favcart" className="wishlist-button">
                    <FiHeart className={`icon ${animateFavIcon ? 'pulse-animation' : ''}`} />
                    <span>whishlist</span>
                </Link>
                <div className="container">
                    <div className="heading">
                        <h2><BiCabinet />Wooden Cabbinets</h2>
                    </div>
                    <section>
                        {WoodenCabinets.map(item => (
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

