import React from 'react'
import styles from '@/styles/landingpage/Category.module.scss'
import categoryImg from '@/public/assets/landingpage/category/ceramic.webp'
import Image from 'next/image'
import WhiteBgButton from '../common/WhiteBgButton'


import majorCat from '@/public/assets/landingpage/category/majorCat.jpg'
import FadeInWhenVisible from '../animations/FadeInWhenVisible'
import Link from 'next/link'

const Category = () => {
    return (
        <div className={styles.categoryContainer}>
            <div className={styles.title}>
                <h1>Shop by Category</h1>
            </div>
            <div className={styles.categoriesListCards}>
                <FadeInWhenVisible className={styles.categoryCard} direction="bottom" delay={0}>
                    <div className="imgContainer">
                        <Image src={categoryImg} alt='cardImg' />
                    </div>
                    <p>Plastic</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible className={styles.categoryCard} direction="bottom" delay={0.25}>
                    <div className="imgContainer">
                        <Image src={categoryImg} alt='cardImg' />
                    </div>
                    <p>Ceramic</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible className={styles.categoryCard} direction="bottom" delay={0.5}>
                    <div className="imgContainer">
                        <Image src={categoryImg} alt='cardImg' />
                    </div>
                    <p>Metal</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible className={styles.categoryCard} direction="bottom" delay={0.75}>
                    <div className="imgContainer">
                        <Image src={categoryImg} alt='cardImg' />
                    </div>
                    <p>Hanging</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible className={styles.categoryCard} direction="bottom" delay={1}>
                    <div className="imgContainer">
                        <Image src={categoryImg} alt='cardImg' />
                    </div>
                    <p>plants</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible className={styles.categoryCard} direction="bottom" delay={1.25}>
                    <div className="imgContainer">
                        <Image src={categoryImg} alt='cardImg' />
                    </div>
                    <p>Self Watering</p>
                </FadeInWhenVisible>
            </div>

            <div className={styles.majorCategoryList}>
                <FadeInWhenVisible className={styles.majorCategoryCard} direction="left" delay={0}>
                    <div className={styles.cardInfo} >
                        <h1>New Arrivals</h1>
                        <Link href={'/shop'}>
                            <WhiteBgButton text={'SHOP THE LATEST'} />
                        </Link>
                    </div>
                    <div className="majorCatImgContainer">
                        <Image src={majorCat} alt='img' />
                    </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible className={styles.majorCategoryCard} direction="left" delay={0.25}>
                    <div className={styles.cardInfo} >
                        <h1>Best-Sellers</h1>
                        <Link href={'/shop'}>
                            <WhiteBgButton text={'SHOP YOUR FAVOURITES'} />
                        </Link>

                    </div>
                    <Image src={majorCat} alt='img' />
                </FadeInWhenVisible>
                <FadeInWhenVisible className={styles.majorCategoryCard} direction="left" delay={0.5}>
                    <div className={styles.cardInfo} >
                        <h1>Gifting</h1>
                        <Link href={'/shop'}>
                            <WhiteBgButton text={'SHOP OCCASION'} />
                        </Link>

                    </div>
                    <Image src={majorCat} alt='img' />
                </FadeInWhenVisible>
            </div>
        </div>
    )
}

export default Category;