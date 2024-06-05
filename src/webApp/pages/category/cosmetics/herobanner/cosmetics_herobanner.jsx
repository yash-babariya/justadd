import React from 'react';
import './herobanner.scss';

export default function HerobannnerCosmetics() {
    return (
        <div className='herobanner-cosmetics'>
            <section>
                <h4>Welcome to JustAdd</h4>
                <div className="heading">
                    <h3>Reveal Your Inner Glow</h3>
                </div>
                <div className="details">
                    <p>
                        "Explore our curated collection of cosmetics crafted with care, and embark on a journey to discover your true brilliance."
                    </p>
                    <div className="explore-button">
                        <button className="explore-btn">Shop Now</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
