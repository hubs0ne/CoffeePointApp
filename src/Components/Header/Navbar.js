import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a href='/'> Info </a>
            <a href='/'> Stock </a>
            <a href='/'> Buy coffee </a>
        </nav>
    )
}

export default Navbar
