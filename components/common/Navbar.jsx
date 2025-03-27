import React from 'react'
import styles from '@/styles/common/Navbar.module.scss'
import Link from 'next/link';
import CartIcon from '@/public/assets/icons/cart.svg'
import SearchIcon from '@/public/assets/icons/search.svg'
import UserIcon from '@/public/assets/icons/user.svg'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>
                <Link href="/">Home</Link>
                <Link href="">Shop</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
            </div>
            <div className={styles.title}>
                Aranya
            </div>
            <div>
                <CartIcon width={30}/>
                <SearchIcon width={30}  />
                <UserIcon width={30}  />
            </div>
        </div>
    )
}

export default Navbar;