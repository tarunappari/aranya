import React from 'react'

// css will be in herosection 
import styles from '@/styles/landingpage/HeroSection.module.scss'
import WhiteBgButton from '../common/WhiteBgButton';

const Mission = () => {
  return (
    <div className={styles.missionContainer}>
        <h1>We’re on a Mission To Clean Up the Industry</h1>
        <p>Read about our progress in our latest Impact Report.</p>
        <WhiteBgButton text={'LEARN MORE'} />
    </div>
  )
}

export default Mission;