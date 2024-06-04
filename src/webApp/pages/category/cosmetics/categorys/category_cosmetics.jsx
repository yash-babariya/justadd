import React from 'react';
import './cosmeticCategory.scss'
import pic1 from '../../../../../assets/images/grid-face.webp';
import pic2 from '../../../../../assets/images/grid-eye.webp';
import pic3 from '../../../../../assets/images/grid-hair.webp';
import pic4 from '../../../../../assets/images/grid-lip.webp';
import pic5 from '../../../../../assets/images/grid-skin.webp';
import pic6 from '../../../../../assets/images/grid-nail.webp';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'face', image: pic1 },
    { id: 2, name: 'eyes', image: pic2 },
    { id: 3, name: 'hair', image: pic3 },
    { id: 4, name: 'lips', image: pic4 },
    { id: 5, name: 'skin', image: pic5 },
    { id: 6, name: 'nails', image: pic6 }
]

export default function CosmeticCategory() {
    return (
        <div className='cosmetics-category'>
            <div className="container">
                <section>
                    <div className="heading">
                        <h3>SHOP BY CATEGORY</h3>
                    </div>
                    <div className="text">
                        <p>Glam essentials for everyone</p>
                    </div>
                    <div className="grid">
                        {
                            products.map(product => (
                                <Link to={`/${product.name}`} key={product.id} className={`grid-item item${product.id}`}>
                                    <div className="category-img">
                                        <img loading="lazy" src={product.image} alt={product.name} />
                                    </div>
                                    <h3>{product.name}</h3>
                                </Link>
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}
