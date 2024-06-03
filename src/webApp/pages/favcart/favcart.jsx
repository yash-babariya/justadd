import React from 'react'
import './favcart.scss'
import { useSelector } from 'react-redux';

export default function FavCart() {
    const favItems = useSelector(state => state.cart.favs);
    return (
        <div className='fav-cart'>
            <div className="container">
                <div className="heading">
                    <h2>Favourite Cart</h2>
                </div>
                <div className="carts">
                    {
                        favItems.map(item => (
                            <div className="fav-cart-items" key={item.id}>
                                <div className="cart-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
