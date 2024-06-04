import React, { useState, useEffect } from 'react';
import './herobanner.scss';
import sofaLong from '../../../../assets/images/farniture-long.jpg';
import furnitureResponsiveImg from '../../../../assets/images/furniture-responsive-herobanner.jpg';

export default function Herobanner() {
    const [imageSrc, setImageSrc] = useState(sofaLong);

    // Function to update image based on window width
    const updateImageSource = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
            setImageSrc(furnitureResponsiveImg);
        } else {
            setImageSrc(sofaLong);
        }
    };

    // Set up and tear down the resize listener
    useEffect(() => {
        window.addEventListener('resize', updateImageSource);
        // Set initial image based on current window width
        updateImageSource();
        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', updateImageSource);
        };
    }, []);

    return (
        <header className='herobanner'>
            <section aria-label="Featured Products">
                <article className="hero-text">
                    <h4>Live in Style</h4>
                    <h1>Luxurious Living & Latest Looks</h1>
                    <nav className="button">
                        <button aria-label="Shop the latest styles now">Just Add</button>
                        <button aria-label="Learn more about our products">Learn More</button>
                    </nav>
                </article>
                <div className="hero-img">
                    <img loading="lazy" src={imageSrc} alt="Featured Sofa" width={"100%"} height={"100%"} />
                </div>
            </section>
        </header>
    );
}
