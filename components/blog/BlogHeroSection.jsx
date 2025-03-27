import React from 'react'
import styles from '@/styles/blog/BlogHeroSection.module.scss'
import BlogCard from './BlogCard';
import BlackBtn from '../common/BlackBtn';
import BlogInitiatives from './BlogInitiatives';

const BlogHeroSection = () => {
    return (
        <div className={styles.blogContainer}>
            <div className={styles.title}>
                <div></div>
                <h1>Aranya</h1>
                <p>We’re on a mission to cozy up your home. </p>
                <p>These are the people, stories, and ideas that will help us get there.</p>
            </div>
            <div className={styles.latestBlogs}>
                <h2>The Latest</h2>
                <div className={styles.blogCardsContainer}>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div>
                    <BlackBtn text={'Load more Articles'}  />
                </div>
            </div>
            <BlogInitiatives />
        </div>
    )
}

export default BlogHeroSection;