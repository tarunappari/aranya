import React from 'react'
import styles from '@/styles/landingpage/Category.module.scss'
import categoryImg from '@/public/assets/landingpage/category/ceramic.webp'
import Image from 'next/image'
import WhiteBgButton from '../common/WhiteBgButton'


import majorCat from '@/public/assets/landingpage/category/majorCat.jpg'

const Category = () => {
    return (
        <div className={styles.categoryContainer}>
            <div className={styles.title}>
                <h1>Shop by Category</h1>
            </div>
            <div className={styles.categoriesListCards}>
                <div className={styles.categoryCard}>
                    <div className="imgContainer">
                        <Image src={categoryImg} alt='cardImg' />
                    </div>
                    <p>Plastic</p>
                </div>
                <div className={styles.categoryCard}>
                    <div className="imgContainer">
                        <Image src={categoryImg} alt='cardImg' />
                    </div>
                    <p>Ceramic</p>
                </div>
                <div className={styles.categoryCard}>
                    <div className="imgContainer">
                        <Image src={categoryImg} alt='cardImg' />
                    </div>
                    <p>Metal</p>
                </div>
                <div className={styles.categoryCard}>
                    <div className="imgContainer">
                        <Image src={categoryImg} alt='cardImg' />
                    </div>
                    <p>Hanging</p>
                </div>
                <div className={styles.categoryCard}>
                    <div className="imgContainer">
                        <Image src={categoryImg} alt='cardImg' />
                    </div>
                    <p>plants</p>
                </div>
                <div className={styles.categoryCard}>
                    <div className="imgContainer">
                        <Image src={categoryImg} alt='cardImg' />
                    </div>
                    <p>Self Watering</p>
                </div>
            </div>

            <div className={styles.majorCategoryList}>
                <div className={styles.majorCategoryCard}>
                    <div className={styles.cardInfo} >
                        <h1>New Arrivals</h1>
                        <WhiteBgButton text={'SHOP THE LATEST'} />
                    </div>
                    <Image src={majorCat} alt='img' />
                </div>
                <div className={styles.majorCategoryCard}>
                    <div className={styles.cardInfo} >
                        <h1>Best-Sellers</h1>
                        <WhiteBgButton text={'SHOP YOUR FAVOURITES'} />
                    </div>
                    <Image src={majorCat} alt='img' />
                </div>
                <div className={styles.majorCategoryCard}>
                    <div className={styles.cardInfo} >
                        <h1>Gifting</h1>
                        <WhiteBgButton text={'SHOP OCCASION'} />
                    </div>
                    <Image src={majorCat} alt='img' />
                </div>
            </div>
        </div>
    )
}

export default Category;