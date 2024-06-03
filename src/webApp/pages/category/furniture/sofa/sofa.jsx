import React, { useState } from 'react'
import { GiSofa } from "react-icons/gi";
import './sofa.scss'
import img1 from '../../../../../assets/images/sofa (1).jpg';
import img2 from '../../../../../assets/images/sofa (2).jpg';
import img3 from '../../../../../assets/images/sofa (3).jpg';
import img4 from '../../../../../assets/images/sofa (4).jpg';
import img5 from '../../../../../assets/images/sofa (5).jpg';
import img6 from '../../../../../assets/images/sofa (6).jpg';
import img7 from '../../../../../assets/images/sofa (7).jpg';
import img8 from '../../../../../assets/images/sofa (8).jpg';
import img9 from '../../../../../assets/images/sofa (9).jpg';
import img10 from '../../../../../assets/images/sofa (10).jpg';
import img11 from '../../../../../assets/images/sofa (11).jpg';
import img12 from '../../../../../assets/images/sofa (12).jpg';
import img13 from '../../../../../assets/images/sofa (13).jpg';
import img14 from '../../../../../assets/images/sofa (14).jpg';
import img15 from '../../../../../assets/images/sofa (15).jpg';
import img16 from '../../../../../assets/images/sofa (16).jpg';
import img17 from '../../../../../assets/images/sofa (17).jpg';
import img18 from '../../../../../assets/images/sofa (18).jpg';
import img19 from '../../../../../assets/images/sofa (19).jpg';
import img20 from '../../../../../assets/images/sofa (20).jpg';
import img21 from '../../../../../assets/images/sofa (21).jpg';
import img22 from '../../../../../assets/images/sofa (22).jpg';
import img23 from '../../../../../assets/images/sofa (23).jpg';
import img24 from '../../../../../assets/images/sofa (24).jpg';
import img25 from '../../../../../assets/images/sofa (25).jpg';
import img26 from '../../../../../assets/images/sofa (26).jpg';
import img27 from '../../../../../assets/images/sofa (27).jpg';
import img28 from '../../../../../assets/images/sofa (28).jpg';
import img29 from '../../../../../assets/images/sofa (29).jpg';
import img30 from '../../../../../assets/images/sofa (30).jpg';
import img31 from '../../../../../assets/images/sofa (31).jpg';
import img32 from '../../../../../assets/images/sofa (32).jpg';
import img33 from '../../../../../assets/images/sofa (33).jpg';
import img34 from '../../../../../assets/images/sofa (34).jpg';
import img35 from '../../../../../assets/images/sofa (35).jpg';
import img36 from '../../../../../assets/images/sofa (36).jpg';
import img37 from '../../../../../assets/images/sofa (37).jpg';
import img38 from '../../../../../assets/images/sofa (38).jpg';
import img39 from '../../../../../assets/images/sofa (39).jpg';
import img40 from '../../../../../assets/images/sofa (40).jpg';
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts, favCarts, removeFromFavCarts } from '../../../../../redux/cart/cart';
import toast from 'react-hot-toast';
import { FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const sofas = [
    {
        id: 1,
        image: img1,
        name: "L-shaped Sofa",
        price: 999,
        sizes: ["Large", "Extra Large"],
        details: "Bring both style and functionality to your living space with our versatile L-shaped sofa. Its spacious design allows for ample seating, making it perfect for entertaining guests or relaxing with family. Upholstered in durable fabric, this sofa is both comfortable and easy to clean. The reversible chaise allows for customizable configurations to fit any room layout. Add a touch of modern elegance to your home with this timeless piece."
    },
    {
        id: 2,
        image: img2,
        name: "Sectional Sofa",
        price: 799,
        sizes: ["Medium", "Large"],
        details: "Create a cozy and inviting atmosphere in your living room with our stylish sectional sofa. With its plush cushions and sleek design, this sofa is perfect for lounging and entertaining. The adjustable headrests and armrests provide customizable comfort, while the sturdy construction ensures long-lasting durability. Available in multiple sizes and colors, this sectional sofa is sure to complement any modern home decor."
    },
    {
        id: 3,
        image: img3,
        name: "Chesterfield Sofa",
        price: 1299,
        sizes: ["Medium", "Large"],
        details: "Add a touch of sophistication to your home with our luxurious Chesterfield sofa. Featuring classic button-tufted detailing and rolled arms, this sofa exudes timeless elegance. The high-quality velvet upholstery offers both comfort and durability, while the sturdy wooden frame provides stability and support. Whether placed in a formal living room or a cozy den, this Chesterfield sofa will elevate any space with its refined style."
    },
    {
        id: 4,
        image: img4,
        name: "Sleeper Sofa",
        price: 899,
        sizes: ["Medium", "Large"],
        details: "Maximize space in your home with our versatile sleeper sofa. Perfect for overnight guests or movie nights, this sofa easily converts into a comfortable bed. The durable upholstery and sturdy construction ensure long-lasting durability, while the plush cushions provide exceptional comfort. With its stylish design and practical functionality, this sleeper sofa is a must-have addition to any modern living room or guest room."
    },
    {
        id: 5,
        image: img5,
        name: "Reclining Sofa",
        price: 1099,
        sizes: ["Medium", "Large"],
        details: "Unwind after a long day on our luxurious reclining sofa. With its plush cushioning and smooth reclining mechanism, this sofa offers unparalleled comfort and relaxation. The durable upholstery is easy to clean and maintain, while the sturdy construction ensures long-lasting durability. Whether watching TV or taking a nap, this reclining sofa is the perfect addition to any living room or entertainment area."
    },
    {
        id: 6,
        image: img6,
        name: "Futon Sofa",
        price: 499,
        sizes: ["Small", "Medium"],
        details: "Optimize your space with our versatile futon sofa. Perfect for small apartments or guest rooms, this sofa easily converts into a cozy bed. The sleek design and durable construction make it a stylish and practical addition to any modern home. Available in multiple sizes and colors, this futon sofa is sure to complement any decor style while providing comfort and functionality."
    },
    {
        id: 7,
        image: img7,
        name: "Loveseat",
        price: 699,
        sizes: ["Small", "Medium"],
        details: "Create a cozy seating area in your home with our charming loveseat. Perfect for small spaces or as a complement to your existing furniture, this loveseat offers both comfort and style. The plush cushions and sturdy construction ensure long-lasting durability, while the compact design makes it easy to fit into any room layout. Whether placed in a living room, bedroom, or office, this loveseat is sure to be a favorite spot for relaxing and unwinding."
    },
    {
        id: 8,
        image: img8,
        name: "Chaise Lounge",
        price: 899,
        sizes: ["Medium", "Large"],
        details: "Indulge in ultimate relaxation with our elegant chaise lounge. Featuring a sleek design and plush cushioning, this lounge chair is perfect for lounging and reading. The adjustable backrest allows you to find the perfect angle for maximum comfort, while the durable upholstery ensures long-lasting use. Whether placed in a living room, bedroom, or home office, this chaise lounge adds a touch of luxury to any space."
    },
    {
        id: 9,
        image: img9,
        name: "Mid-century Modern Sofa",
        price: 1199,
        sizes: ["Medium", "Large"],
        details: "Add retro flair to your living room with our mid-century modern sofa. Featuring clean lines and tapered legs, this sofa captures the iconic style of the 1950s and 1960s. The plush cushions and durable upholstery ensure both comfort and longevity, while the solid wood frame provides stability and support. Whether placed in a modern or eclectic space, this sofa is sure to be the focal point of any room."
    },
    {
        id: 10,
        image: img10,
        name: "Modular Sofa",
        price: 1499,
        sizes: ["Large", "Extra Large"],
        details: "Create endless seating configurations with our versatile modular sofa. Featuring individual pieces that can be rearranged to fit any room layout, this sofa offers customizable comfort and style. The plush cushions and durable upholstery ensure both comfort and longevity, while the sturdy construction provides stability and support. Whether used as a sectional or as standalone pieces, this modular sofa is sure to enhance any living space."
    },
    {
        id: 11,
        image: img11,
        name: "Convertible Sofa",
        price: 799,
        sizes: ["Medium", "Large"],
        details: "Maximize space in your home with our convenient convertible sofa. Perfect for small apartments or guest rooms, this sofa easily converts into a comfortable bed. The durable upholstery and sturdy construction ensure long-lasting durability, while the plush cushions provide exceptional comfort. With its stylish design and practical functionality, this convertible sofa is a versatile addition to any modern home."
    },
    {
        id: 12,
        image: img12,
        name: "Lawson-style Sofa",
        price: 999,
        sizes: ["Medium", "Large"],
        details: "Create a cozy and inviting atmosphere in your living room with our classic Lawson-style sofa. Featuring rolled arms and plush cushions, this sofa offers both comfort and style. The durable upholstery and sturdy construction ensure long-lasting durability, while the timeless design complements any decor style. Whether lounging with family or entertaining guests, this Lawson-style sofa is sure to be a favorite spot in your home."
    },
    {
        id: 13,
        image: img13,
        name: "Camelback Sofa",
        price: 1299,
        sizes: ["Medium", "Large"],
        details: "Elevate your living room with our elegant camelback sofa. Featuring a distinctive curved back and luxurious upholstery, this sofa exudes classic charm and sophistication. The plush cushions and sturdy construction ensure both comfort and longevity, while the timeless design complements any decor style. Whether placed in a formal living room or a cozy den, this camelback sofa is sure to make a statement in your home."
    },
    {
        id: 14,
        image: img14,
        name: "Tuxedo Sofa",
        price: 1199,
        sizes: ["Medium", "Large"],
        details: "Add a touch of elegance to your living room with our refined tuxedo sofa. Featuring clean lines and tailored upholstery, this sofa exudes sophistication and style. The plush cushions and sturdy construction ensure both comfort and longevity, while the timeless design complements any decor style. Whether placed in a modern or traditional setting, this tuxedo sofa is sure to elevate your home decor."
    },
    {
        id: 15,
        image: img15,
        name: "English Rolled Arm Sofa",
        price: 1099,
        sizes: ["Medium", "Large"],
        details: "Create a cozy and inviting atmosphere in your living room with our classic English rolled arm sofa. Featuring rolled arms and plush cushions, this sofa offers both comfort and style. The durable upholstery and sturdy construction ensure long-lasting durability, while the timeless design complements any decor style. Whether lounging with family or entertaining guests, this English rolled arm sofa is sure to be a favorite spot in your home."
    },
    {
        id: 16,
        image: img16,
        name: "Sofa Bed",
        price: 999,
        sizes: ["Medium", "Large"],
        details: "Maximize space in your home with our versatile sofa bed. Perfect for overnight guests or movie nights, this sofa easily converts into a comfortable bed. The durable upholstery and sturdy construction ensure long-lasting durability, while the plush cushions provide exceptional comfort. With its stylish design and practical functionality, this sofa bed is a must-have addition to any modern living room or guest room."
    },
    {
        id: 17,
        image: img17,
        name: "Microfiber Sofa",
        price: 599,
        sizes: ["Medium", "Large"],
        details: "Create a cozy seating area in your home with our comfortable microfiber sofa. The soft microfiber upholstery offers both comfort and durability, while the plush cushions provide exceptional support. The sturdy construction ensures long-lasting use, making this sofa perfect for everyday use. Whether placed in a living room, den, or home office, this microfiber sofa is sure to be a favorite spot for relaxing and unwinding."
    },
    {
        id: 18,
        image: img18,
        name: "Leather Sofa",
        price: 1599,
        sizes: ["Medium", "Large"],
        details: "Add a touch of luxury to your living room with our premium leather sofa. Crafted from top-grain leather, this sofa exudes elegance and sophistication. The plush cushions and sturdy construction ensure both comfort and longevity, while the timeless design complements any decor style. Whether placed in a modern or traditional setting, this leather sofa is sure to elevate your home decor."
    },
    {
        id: 19,
        image: img19,
        name: "Fabric Sofa",
        price: 899,
        sizes: ["Medium", "Large"],
        details: "Create a cozy and inviting atmosphere in your living room with our stylish fabric sofa. Featuring a durable fabric upholstery and plush cushions, this sofa offers both comfort and style. The sturdy construction ensures long-lasting durability, while the timeless design complements any decor style. Whether lounging with family or entertaining guests, this fabric sofa is sure to be a favorite spot in your home."
    },
    {
        id: 20,
        image: img20,
        name: "Tufted Sofa",
        price: 1299,
        sizes: ["Medium", "Large"],
        details: "Add a touch of elegance to your living room with our sophisticated tufted sofa. Featuring classic button-tufted detailing and plush cushions, this sofa exudes timeless charm and sophistication. The sturdy construction and durable upholstery ensure long-lasting durability, while the elegant design complements any decor style. Whether placed in a modern or traditional setting, this tufted sofa is sure to elevate your home decor."
    },
    {
        id: 21,
        image: img21,
        name: "Sleeper Sectional Sofa",
        price: 1499,
        sizes: ["Large", "Extra Large"],
        details: "Maximize space in your home with our versatile sleeper sectional sofa. Perfect for overnight guests or movie nights, this sofa easily converts into a comfortable bed. The durable upholstery and sturdy construction ensure long-lasting durability, while the plush cushions provide exceptional comfort. With its stylish design and practical functionality, this sleeper sectional sofa is a must-have addition to any modern living room or guest room."
    },
    {
        id: 22,
        image: img22,
        name: "Outdoor Sofa",
        price: 799,
        sizes: ["Medium", "Large"],
        details: "Transform your outdoor space with our durable outdoor sofa. Crafted from weather-resistant materials, this sofa is built to withstand the elements. The plush cushions and sturdy construction ensure both comfort and longevity, while the sleek design adds a touch of modern elegance to your patio or deck. Whether lounging with family or entertaining guests, this outdoor sofa is sure to enhance your outdoor living experience."
    },
    {
        id: 23,
        image: img23,
        name: "Corner Sofa",
        price: 1099,
        sizes: ["Large", "Extra Large"],
        details: "Maximize seating in your living room with our spacious corner sofa. Featuring a versatile L-shaped design, this sofa offers ample seating for family and guests. The plush cushions and sturdy construction ensure both comfort and longevity, while the timeless design complements any decor style. Whether lounging with family or entertaining guests, this corner sofa is sure to be a favorite spot in your home."
    },
    {
        id: 24,
        image: img24,
        name: "Curved Sofa",
        price: 1399,
        sizes: ["Large", "Extra Large"],
        details: "Add a touch of elegance to your living room with our curved sofa. Featuring a sleek curved design and plush cushions, this sofa exudes modern sophistication. The durable upholstery and sturdy construction ensure long-lasting durability, while the unique design adds visual interest to any space. Whether placed in a formal living room or a cozy den, this curved sofa is sure to make a statement in your home."
    },
    {
        id: 25,
        image: img25,
        name: "Vintage Sofa",
        price: 999,
        sizes: ["Medium", "Large"],
        details: "Add retro charm to your living room with our vintage-inspired sofa. Featuring classic design elements and plush cushions, this sofa exudes old-world elegance and charm. The durable upholstery and sturdy construction ensure long-lasting durability, while the timeless design complements any decor style. Whether placed in a modern or traditional setting, this vintage sofa is sure to be a conversation starter in your home."
    },
    {
        id: 26,
        image: img26,
        name: "Swivel Sofa",
        price: 1199,
        sizes: ["Medium", "Large"],
        details: "Add versatility to your living room with our stylish swivel sofa. Featuring a swivel base and plush cushions, this sofa offers both comfort and functionality. The durable upholstery and sturdy construction ensure long-lasting durability, while the modern design adds a contemporary touch to any space. Whether lounging with family or entertaining guests, this swivel sofa is sure to be a favorite spot in your home."
    },
    {
        id: 27,
        image: img27,
        name: "Upholstered Sofa",
        price: 999,
        sizes: ["Medium", "Large"],
        details: "Create a cozy and inviting atmosphere in your living room with our upholstered sofa. Featuring plush cushions and durable upholstery, this sofa offers both comfort and style. The sturdy construction ensures long-lasting durability, while the timeless design complements any decor style. Whether lounging with family or entertaining guests, this upholstered sofa is sure to be a favorite spot in your home."
    },
    {
        id: 28,
        image: img28,
        name: "High-back Sofa",
        price: 1299,
        sizes: ["Medium", "Large"],
        details: "Create a cozy seating area in your home with our elegant high-back sofa. Featuring a tall backrest and plush cushions, this sofa offers both comfort and style. The durable upholstery and sturdy construction ensure long-lasting durability, while the timeless design complements any decor style. Whether placed in a formal living room or a cozy den, this high-back sofa is sure to be a favorite spot for relaxing and unwinding."
    },
    {
        id: 29,
        image: img29,
        name: "Low-back Sofa",
        price: 999,
        sizes: ["Medium", "Large"],
        details: "Add a modern touch to your living room with our sleek low-back sofa. Featuring a low-profile design and plush cushions, this sofa exudes contemporary style and sophistication. The durable upholstery and sturdy construction ensure long-lasting durability, while the minimalist design complements any decor style. Whether placed in a modern loft or a cozy apartment, this low-back sofa is sure to enhance your home decor."
    },
    {
        id: 30,
        image: img30,
        name: "Armless Sofa",
        price: 699,
        sizes: ["Small", "Medium"],
        details: "Maximize seating in your living room with our versatile armless sofa. Featuring a streamlined design and plush cushions, this sofa offers both comfort and style. The durable upholstery and sturdy construction ensure long-lasting durability, while the compact size makes it perfect for small spaces. Whether used as standalone seating or as part of a sectional, this armless sofa is sure to enhance your living space."
    },
    {
        id: 31,
        image: img31,
        name: "Platform Sofa",
        price: 1199,
        sizes: ["Medium", "Large"],
        details: "Add a contemporary touch to your living room with our sleek platform sofa. Featuring a low-profile design and plush cushions, this sofa exudes modern style and sophistication. The durable upholstery and sturdy construction ensure long-lasting durability, while the minimalist design complements any decor style. Whether placed in a modern loft or a cozy apartment, this platform sofa is sure to enhance your home decor."
    },
    {
        id: 32,
        image: img32,
        name: "Contemporary Sofa",
        price: 1499,
        sizes: ["Medium", "Large"],
        details: "Create a chic seating area in your home with our stylish contemporary sofa. Featuring clean lines and plush cushions, this sofa offers both comfort and style. The durable upholstery and sturdy construction ensure long-lasting durability, while the modern design adds a contemporary touch to any space. Whether placed in a living room, den, or home office, this contemporary sofa is sure to be a favorite spot for relaxing and unwinding."
    },
    {
        id: 33,
        image: img33,
        name: "Traditional Sofa",
        price: 1399,
        sizes: ["Medium", "Large"],
        details: "Create a timeless look in your living room with our classic traditional sofa. Featuring rolled arms and plush cushions, this sofa exudes elegance and sophistication. The durable upholstery and sturdy construction ensure long-lasting durability, while the timeless design complements any decor style. Whether placed in a formal living room or a cozy den, this traditional sofa is sure to be a favorite spot for relaxing and unwinding."
    },
    {
        id: 34,
        image: img34,
        name: "Retro Sofa",
        price: 1099,
        sizes: ["Medium", "Large"],
        details: "Add retro flair to your living room with our stylish retro sofa. Featuring clean lines and tapered legs, this sofa captures the iconic style of the 1950s and 1960s. The plush cushions and durable upholstery ensure both comfort and longevity, while the solid wood frame provides stability and support. Whether placed in a modern or eclectic space, this retro sofa is sure to be the focal point of any room."
    },
    {
        id: 35,
        image: img35,
        name: "MCM Sofa",
        price: 1599,
        sizes: ["Medium", "Large"],
        details: "Add mid-century modern charm to your living room with our stylish MCM sofa. Featuring clean lines and tapered legs, this sofa captures the iconic style of the 1950s and 1960s. The plush cushions and durable upholstery ensure both comfort and longevity, while the solid wood frame provides stability and support. Whether placed in a modern or eclectic space, this MCM sofa is sure to be the focal point of any room."
    },
    {
        id: 36,
        image: img36,
        name: "French Country Sofa",
        price: 1299,
        sizes: ["Medium", "Large"],
        details: "Add rustic charm to your living room with our elegant French country sofa. Featuring carved wood details and plush cushions, this sofa exudes classic French style and sophistication. The durable upholstery and sturdy construction ensure long-lasting durability, while the timeless design complements any decor style. Whether placed in a farmhouse or a traditional home, this French country sofa is sure to make a statement in your living space."
    },
    {
        id: 37,
        image: img37,
        name: "Scandinavian Sofa",
        price: 1099,
        sizes: ["Medium", "Large"],
        details: "Create a cozy and inviting atmosphere in your living room with our minimalist Scandinavian sofa. Featuring clean lines and tapered legs, this sofa exudes Scandinavian style and sophistication. The durable upholstery and sturdy construction ensure long-lasting durability, while the timeless design complements any decor style. Whether placed in a modern loft or a traditional home, this Scandinavian sofa is sure to enhance your living space."
    },
    {
        id: 38,
        image: img38,
        name: "Rustic Sofa",
        price: 1499,
        sizes: ["Medium", "Large"],
        details: "Add warmth and charm to your living room with our rustic sofa. Featuring distressed wood accents and plush cushions, this sofa exudes rustic style and sophistication. The durable upholstery and sturdy construction ensure long-lasting durability, while the timeless design complements any decor style. Whether placed in a cabin or a traditional home, this rustic sofa is sure to make a statement in your living space."
    },
    {
        id: 39,
        image: img39,
        name: "Industrial Sofa",
        price: 1199,
        sizes: ["Medium", "Large"],
        details: "Add urban edge to your living room with our industrial sofa. Featuring metal accents and distressed leather upholstery, this sofa exudes industrial style and sophistication. The durable materials and sturdy construction ensure long-lasting durability, while the timeless design complements any decor style. Whether placed in a loft or a modern apartment, this industrial sofa is sure to make a statement in your living space."
    },
    {
        id: 40,
        image: img40,
        name: "Minimalist Sofa",
        price: 999,
        sizes: ["Medium", "Large"],
        details: "Create a sleek and modern look in your living room with our minimalist sofa. Featuring clean lines and simple design, this sofa exudes contemporary style and sophistication. The durable upholstery and sturdy construction ensure long-lasting durability, while the timeless design complements any decor style. Whether placed in a modern loft or a traditional home, this minimalist sofa is sure to enhance your living space."
    }
];


export default function Sofa() {
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
        <div className='cart' >
            <Link to="/favcart" className="wishlist-button">
                <FiHeart className={`icon ${animateFavIcon ? 'pulse-animation' : ''}`} />
                <span>whishlist</span>
            </Link>
            <div className="container">
                <div className="heading">
                    <h2><GiSofa />Sofa Sets</h2>
                </div>
                <section>
                    {sofas.map(item => (
                        <div className='item'
                            key={item.id}>
                            <div className="item-image">
                                <img src={item.image} alt={item.name} loading='lazy' />
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
    )
}
