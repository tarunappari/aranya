import React from 'react'
import styles from '@/styles/landingpage/HeroSection.module.scss'
import WhiteBgButton from '../common/WhiteBgButton';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className={styles.containerHero} >
            <FadeInWhenVisible direction="right" effect="spring" >
                <h2>Your Cozy Corner</h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible direction="right" delay={0.25} effect="bounce">
                <Link href={'/shop'}>
                    <WhiteBgButton text={'Shop Now'} />
                </Link>
            </FadeInWhenVisible>
        </div>
    )
}

export default HeroSection;