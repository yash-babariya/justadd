import React, { useEffect } from 'react'
import './featured.scss'
import Aos from 'aos';
import categoryimg1 from '../../../../../assets/images/sofa.webp';
import categoryimg2 from '../../../../../assets/images/stool.webp';
import categoryimg3 from '../../../../../assets/images/chair.webp';
import categoryimg4 from '../../../../../assets/images/wooden-cabbinet.webp';
import categoryimg5 from '../../../../../assets/images/sitting-sofa.webp';
import categoryimg6 from '../../../../../assets/images/chain-lemp.webp';
import { Link } from 'react-router-dom';

export default function Featured() {
    const categorys = [
        { id: 'cat1', name: 'sofa', image: categoryimg1 },
        { id: 'cat2', name: 'stool', image: categoryimg2 },
        { id: 'cat3', name: 'chair', image: categoryimg3 },
        { id: 'cat4', name: 'wooden-cabbinet', image: categoryimg4 },
        { id: 'cat5', name: 'sitting-sofa', image: categoryimg5 },
        { id: 'cat6', name: 'chain-lamp', image: categoryimg6 },
    ]
    useEffect(() => {
        Aos.init({ duration: 1000, });
    }, [])
    return (
        <div className='featured'>
            <div className="container">
                <div className="headeing" data-aos="fade-right">
                    <h2>Featured Categories</h2>
                    <span>The freshest and most exciting news</span>
                </div>
                <div className="grid">
                    {
                        categorys.map(category => (
                            <Link key={category.id} to={`/${category.name}`}>
                                <div data-aos="fade-up">
                                    <div className={`grid-item ${category.id}`}>
                                        <div className="category-img">
                                            <img loading="lazy" src={category.image} alt={category.name} />
                                        </div>
                                        <h3>{category.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
