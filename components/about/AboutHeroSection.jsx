import React from 'react'
import styles from '@/styles/about/AboutHeroSection.module.scss'

const AboutHeroSection = () => {
    return (
        <div className={styles.AboutContainer}>
            <div>
                <h1>We believe</h1>
                <h1>we can all make a difference.</h1>
            </div>
            <div className={styles.subhead}>
                <h2>Beautifully Functional. Consciously Crafted.</h2>
            </div>
        </div>
    )
}

export default AboutHeroSection;