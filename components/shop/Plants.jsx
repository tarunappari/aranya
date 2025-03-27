import React from 'react'
import styles from '@/styles/shop/Plants.module.scss'
import PlantCard from './PlantCard';

const Plants = () => {
  return (
    <div className={styles.plantsContainer}>
      <div className={styles.title}>
        <h1>New Arrivals</h1>
        <p>Featured</p>
      </div>
      <div className={styles.plantCardsContainer}>
        {Array.from({ length: 12 }).map((_, index) => (
          <PlantCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default Plants;