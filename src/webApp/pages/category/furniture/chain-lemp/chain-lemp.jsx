import React, { useState } from 'react';
import './chain-lemp.scss';
import toast from 'react-hot-toast';
import { FaCartPlus } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCarts, favCarts, removeFromFavCarts } from '../../../../../redux/cart/cart';
import { TbLamp } from "react-icons/tb";
import lemp1 from '../../../../../assets/images/lemp (1).webp';
import lemp2 from '../../../../../assets/images/lemp (2).webp';
import lemp3 from '../../../../../assets/images/lemp (3).webp';
import lemp4 from '../../../../../assets/images/lemp (4).webp';
import lemp5 from '../../../../../assets/images/lemp (5).webp';
import lemp6 from '../../../../../assets/images/lemp (6).webp';
import lemp7 from '../../../../../assets/images/lemp (7).webp';
import lemp8 from '../../../../../assets/images/lemp (8).webp';
import lemp9 from '../../../../../assets/images/lemp (9).webp';
import lemp10 from '../../../../../assets/images/lemp (10).webp';
import lemp11 from '../../../../../assets/images/lemp (11).webp';
import lemp12 from '../../../../../assets/images/lemp (12).webp';
import lemp13 from '../../../../../assets/images/lemp (13).webp';
import lemp14 from '../../../../../assets/images/lemp (14).webp';
import lemp15 from '../../../../../assets/images/lemp (15).webp';
import lemp16 from '../../../../../assets/images/lemp (16).webp';
import lemp17 from '../../../../../assets/images/lemp (17).webp';
import lemp18 from '../../../../../assets/images/lemp (18).webp';
import lemp19 from '../../../../../assets/images/lemp (19).webp';
import lemp20 from '../../../../../assets/images/lemp (20).webp';

const Lemps = [
    {
        id: 1,
        image: lemp1,
        name: "Antique Brass Lamp",
        price: 49,
        sizes: ["Small", "Medium"],
        details: "An elegant lamp featuring antique brass finish, perfect for adding a touch of vintage charm to any room. The sturdy base ensures stability, while the soft glow creates a cozy ambiance."
    },
    {
        id: 2,
        image: lemp2,
        name: "Modern Desk Lamp",
        price: 35,
        sizes: ["Medium"],
        details: "Sleek and functional, this modern desk lamp is perfect for any contemporary workspace. With adjustable height and angle, it provides focused lighting where you need it most."
    },
    {
        id: 3,
        image: lemp3,
        name: "Crystal Table Lamp",
        price: 89,
        sizes: ["Medium", "Large"],
        details: "A luxurious table lamp adorned with sparkling crystals that reflect light beautifully. Ideal for adding a touch of glamour to your living room or bedroom."
    },
    {
        id: 4,
        image: lemp4,
        name: "Rustic Wood Lamp",
        price: 59,
        sizes: ["Medium"],
        details: "Bring a natural, rustic feel to your home with this wooden lamp. The earthy tones and simple design make it a great addition to any rustic or farmhouse decor."
    },
    {
        id: 5,
        image: lemp5,
        name: "Industrial Floor Lamp",
        price: 120,
        sizes: ["Large"],
        details: "A bold industrial floor lamp with exposed bulbs and metal accents. Perfect for creating an edgy, urban look in your living space."
    },
    {
        id: 6,
        image: lemp6,
        name: "Minimalist LED Lamp",
        price: 40,
        sizes: ["Small", "Medium"],
        details: "This minimalist LED lamp features a sleek, modern design that fits seamlessly into any decor. Energy-efficient and long-lasting, it's perfect for any room in your home."
    },
    {
        id: 7,
        image: lemp7,
        name: "Vintage Edison Lamp",
        price: 65,
        sizes: ["Small"],
        details: "Inspired by early 20th-century designs, this vintage Edison lamp features a unique, exposed bulb design that adds a nostalgic touch to any space."
    },
    {
        id: 8,
        image: lemp8,
        name: "Ceramic Table Lamp",
        price: 55,
        sizes: ["Medium"],
        details: "A stylish ceramic table lamp with a beautiful glaze finish. Its classic design makes it a versatile piece that complements a variety of decor styles."
    },
    {
        id: 9,
        image: lemp9,
        name: "Smart Wi-Fi Lamp",
        price: 75,
        sizes: ["Medium"],
        details: "This smart Wi-Fi lamp can be controlled with your smartphone or voice assistant. Customize the brightness and color to suit any mood or occasion."
    },
    {
        id: 10,
        image: lemp10,
        name: "Glass Globe Lamp",
        price: 85,
        sizes: ["Medium"],
        details: "A stunning glass globe lamp that creates a warm, inviting glow. Its elegant design makes it a perfect accent piece for any room."
    },
    {
        id: 11,
        image: lemp11,
        name: "Bamboo Lantern Lamp",
        price: 50,
        sizes: ["Small", "Medium"],
        details: "Add a touch of the tropics to your home with this bamboo lantern lamp. The natural materials and warm light create a relaxing atmosphere."
    },
    {
        id: 12,
        image: lemp12,
        name: "Geometric Metal Lamp",
        price: 60,
        sizes: ["Medium"],
        details: "A modern lamp with a geometric metal frame. Its unique design and warm light make it a striking addition to any contemporary space."
    },
    {
        id: 13,
        image: lemp13,
        name: "Portable LED Lamp",
        price: 30,
        sizes: ["Small"],
        details: "A portable LED lamp that's perfect for reading, camping, or emergency use. Lightweight and rechargeable, it's a practical and convenient lighting solution."
    },
    {
        id: 14,
        image: lemp14,
        name: "Art Deco Lamp",
        price: 95,
        sizes: ["Medium", "Large"],
        details: "Bring the glamour of the Art Deco era to your home with this stylish lamp. Its bold design and intricate details make it a standout piece."
    },
    {
        id: 15,
        image: lemp15,
        name: "Vintage Oil Lamp",
        price: 45,
        sizes: ["Small"],
        details: "A charming vintage oil lamp replica that adds a touch of nostalgia to any space. Perfect for use as a decorative piece or during power outages."
    },
    {
        id: 16,
        image: lemp16,
        name: "Tiffany Style Lamp",
        price: 110,
        sizes: ["Medium"],
        details: "A beautiful Tiffany-style lamp with a stained glass shade. Its vibrant colors and intricate patterns make it a true work of art."
    },
    {
        id: 17,
        image: lemp17,
        name: "Touch Control Lamp",
        price: 70,
        sizes: ["Medium"],
        details: "This modern lamp features touch control for easy operation. Adjust the brightness with a simple tap, making it perfect for any room in your home."
    },
    {
        id: 18,
        image: lemp18,
        name: "Solar Powered Lamp",
        price: 35,
        sizes: ["Small"],
        details: "Eco-friendly and efficient, this solar powered lamp is perfect for outdoor use. It charges during the day and provides light at night, making it ideal for patios and gardens."
    },
    {
        id: 19,
        image: lemp19,
        name: "Color Changing Lamp",
        price: 55,
        sizes: ["Small", "Medium"],
        details: "Add some fun to your space with this color-changing lamp. It features multiple colors and modes, controlled by a remote, to suit any mood or occasion."
    },
    {
        id: 20,
        image: lemp20,
        name: "Lantern Table Lamp",
        price: 48,
        sizes: ["Medium"],
        details: "A modern take on a classic lantern design. This table lamp features a metal frame and glass panels, creating a cozy and inviting ambiance."
    }
];


export default function ChainLemp() {
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
        <div className='chain-lemp'>
            <div className='cart' >
                <Link to="/favcart" className="wishlist-button">
                    <FiHeart className={`icon ${animateFavIcon ? 'pulse-animation' : ''}`} />
                    <span>whishlist</span>
                </Link>
                <div className="container">
                    <div className="heading">
                        <h2><TbLamp />Chain Lemps</h2>
                    </div>
                    <section>
                        {Lemps.map(item => (
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
