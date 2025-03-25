import React from 'react'
import styles from '@/styles/landingpage/HeroSection.module.scss'
import WhiteBgButton from '../common/WhiteBgButton';

const HeroSection = () => {
    return (
        <div className={styles.containerHero} >
            <div>
                <h2>Your Cozy Corner</h2>
                <WhiteBgButton text={'Shop Now'} />
            </div>
        </div>
    )
}

export default HeroSection;