import React from 'react'
import BlogInitiativeCard from './BlogInitiativeCard'
import styles from '@/styles/blog/BlogInitiative.module.scss'

const BlogInitiatives = () => {
    return (
        <div className={styles.blogInitiatives}>
            <h2>Our Initiatives</h2>
            <div className={styles.blogInitiativeCardsContainer}>
                <BlogInitiativeCard />
                <BlogInitiativeCard />
                <BlogInitiativeCard />
            </div>
        </div>
    )
}

export default BlogInitiatives