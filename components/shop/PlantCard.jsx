import React from 'react'
import styles from '@/styles/shop/Plants.module.scss'
import plantImg from '@/public/assets/landingpage/category/majorCat.jpg'
import Image from 'next/image';
import Link from 'next/link';

const PlantCard = () => {
    return (
        <Link href='shop/plantName'>
            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <div>
                        30% off
                    </div>
                    <Image src={plantImg} alt='img' layout='fill' objectFit='cover' />
                </div>
                <div className={styles.bottomContainer}>
                    <div>
                        <h4>Product</h4>
                        <div>
                            <p style={{ textDecoration: 'line-through' }}>Price</p>
                            <p style={{ color: 'black' }}>Price</p>
                        </div>
                    </div>
                    <div>
                        <span>Color</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PlantCard;