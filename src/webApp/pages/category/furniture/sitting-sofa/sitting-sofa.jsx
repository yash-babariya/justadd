import React, { useState } from 'react';
import './sitting-sofa.scss';
import { FaCartPlus } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts, favCarts, removeFromFavCarts } from '../../../../../redux/cart/cart';
import toast from 'react-hot-toast';
import { MdEventSeat } from "react-icons/md";
import sittingSofa1 from '../../../../../assets/images/sitting-sofa (1).webp';
import sittingSofa2 from '../../../../../assets/images/sitting-sofa (2).webp';
import sittingSofa3 from '../../../../../assets/images/sitting-sofa (3).webp';
import sittingSofa4 from '../../../../../assets/images/sitting-sofa (4).webp';
import sittingSofa5 from '../../../../../assets/images/sitting-sofa (5).webp';
import sittingSofa6 from '../../../../../assets/images/sitting-sofa (6).webp';
import sittingSofa7 from '../../../../../assets/images/sitting-sofa (7).webp';
import sittingSofa8 from '../../../../../assets/images/sitting-sofa (8).webp';
import sittingSofa9 from '../../../../../assets/images/sitting-sofa (9).webp';
import sittingSofa10 from '../../../../../assets/images/sitting-sofa (10).webp';
import sittingSofa11 from '../../../../../assets/images/sitting-sofa (11).webp';
import sittingSofa12 from '../../../../../assets/images/sitting-sofa (12).webp';
import sittingSofa13 from '../../../../../assets/images/sitting-sofa (13).webp';
import sittingSofa14 from '../../../../../assets/images/sitting-sofa (14).webp';
import sittingSofa15 from '../../../../../assets/images/sitting-sofa (15).webp';
import sittingSofa16 from '../../../../../assets/images/sitting-sofa (16).webp';
import sittingSofa17 from '../../../../../assets/images/sitting-sofa (17).webp';
import sittingSofa18 from '../../../../../assets/images/sitting-sofa (18).webp';
import sittingSofa19 from '../../../../../assets/images/sitting-sofa (19).webp';
import sittingSofa20 from '../../../../../assets/images/sitting-sofa (20).webp';
import { Link } from 'react-router-dom';


const sittingSofa = [
    {
        id: 1,
        image: sittingSofa1,
        name: "Modern Grey Sofa",
        price: 300,
        size: "Large",
        details: "A sleek and modern grey sofa that fits perfectly in any contemporary living room. Made with high-quality fabric and sturdy construction.",
    },
    {
        id: 2,
        image: sittingSofa2,
        name: "Classic Leather Sofa",
        price: 500,
        size: "Large",
        details: "A luxurious leather sofa that brings a touch of elegance to your home. Features deep seating and plush cushions for maximum comfort.",
    },
    {
        id: 3,
        image: sittingSofa3,
        name: "Vintage Velvet Sofa",
        price: 400,
        size: "Medium",
        details: "This vintage velvet sofa adds a touch of retro charm to any space. Soft velvet upholstery and mid-century modern design.",
    },
    {
        id: 4,
        image: sittingSofa4,
        name: "Compact Sleeper Sofa",
        price: 350,
        size: "Small",
        details: "A versatile sleeper sofa that's perfect for small spaces. Easily converts into a bed for overnight guests.",
    },
    {
        id: 5,
        image: sittingSofa5,
        name: "Luxury Sectional Sofa",
        price: 700,
        size: "Extra Large",
        details: "An expansive sectional sofa that offers ample seating for large families. Features a chaise lounge and premium upholstery.",
    },
    {
        id: 6,
        image: sittingSofa6,
        name: "Chesterfield Sofa",
        price: 600,
        size: "Large",
        details: "A classic Chesterfield sofa with deep button tufting and rolled arms. Perfect for traditional or eclectic decor.",
    },
    {
        id: 7,
        image: sittingSofa7,
        name: "Contemporary Blue Sofa",
        price: 320,
        size: "Medium",
        details: "A bright and cheerful blue sofa that adds a pop of color to your living room. Durable fabric and sleek design.",
    },
    {
        id: 8,
        image: sittingSofa8,
        name: "Reclining Sofa",
        price: 550,
        size: "Large",
        details: "A comfortable reclining sofa that allows you to relax in style. Features adjustable headrests and footrests.",
    },
    {
        id: 9,
        image: sittingSofa9,
        name: "Scandinavian Style Sofa",
        price: 380,
        size: "Medium",
        details: "A minimalist Scandinavian style sofa with clean lines and neutral tones. Perfect for modern living spaces.",
    },
    {
        id: 10,
        image: sittingSofa10,
        name: "Fabric Sofa with Chaise",
        price: 450,
        size: "Large",
        details: "A cozy fabric sofa with a chaise lounge for extra relaxation. Soft cushions and a sturdy frame.",
    },
    {
        id: 11,
        image: sittingSofa11,
        name: "Elegant White Sofa",
        price: 400,
        size: "Medium",
        details: "An elegant white sofa that brightens up any room. Easy to clean and maintain, with removable cushion covers.",
    },
    {
        id: 12,
        image: sittingSofa12,
        name: "Convertible Futon Sofa",
        price: 280,
        size: "Small",
        details: "A practical futon sofa that converts into a bed. Ideal for small apartments and guest rooms.",
    },
    {
        id: 13,
        image: sittingSofa13,
        name: "Tufted Velvet Sofa",
        price: 450,
        size: "Medium",
        details: "A luxurious tufted velvet sofa with a glamorous look. Perfect for adding a touch of sophistication to your home.",
    },
    {
        id: 14,
        image: sittingSofa14,
        name: "Bohemian Rattan Sofa",
        price: 370,
        size: "Medium",
        details: "A bohemian-inspired rattan sofa with natural materials. Great for creating a relaxed and inviting atmosphere.",
    },
    {
        id: 15,
        image: sittingSofa15,
        name: "Linen Loveseat",
        price: 290,
        size: "Small",
        details: "A comfortable linen loveseat that's perfect for cozying up with a book. Compact design for small spaces.",
    },
    {
        id: 16,
        image: sittingSofa16,
        name: "Industrial Leather Sofa",
        price: 520,
        size: "Large",
        details: "A rugged industrial leather sofa with a modern edge. Features metal accents and durable leather upholstery.",
    },
    {
        id: 17,
        image: sittingSofa17,
        name: "Coastal Style Sofa",
        price: 350,
        size: "Medium",
        details: "A coastal style sofa with light blue fabric and a relaxed vibe. Perfect for beach houses and coastal decor.",
    },
    {
        id: 18,
        image: sittingSofa18,
        name: "Plush Microfiber Sofa",
        price: 310,
        size: "Large",
        details: "A plush microfiber sofa that's soft to the touch. Easy to clean and maintain, with a durable build.",
    },
    {
        id: 19,
        image: sittingSofa19,
        name: "Minimalist Sofa",
        price: 330,
        size: "Medium",
        details: "A minimalist sofa with clean lines and a simple design. Perfect for modern and contemporary homes.",
    },
    {
        id: 20,
        image: sittingSofa20,
        name: "Retro Print Sofa",
        price: 360,
        size: "Medium",
        details: "A retro print sofa that adds a touch of vintage charm to your living room. Unique design and comfortable seating.",
    },
];



export default function SittingSofa() {
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
        <div className="sitting-sofa">
            <div className='cart' >
                <Link to="/favcart" className="wishlist-button">
                    <FiHeart className={`icon ${animateFavIcon ? 'pulse-animation' : ''}`} />
                    <span>whishlist</span>
                </Link>
                <div className="container">
                    <div className="heading">
                        <h2><MdEventSeat />sitting sofa</h2>
                    </div>
                    <section>
                        {sittingSofa.map(item => (
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
