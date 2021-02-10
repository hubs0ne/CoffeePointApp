import React from 'react'
import styles from "./Content.module.css"

const Content = () => {
    return (
        <div className={styles.content}>
            <header>
                <h1>Заряд кофе будущего</h1>
            </header>
            <div className={styles.menu}>
                Coffee:
                <ul>
                    <li>Americano - 80 rub.</li>
                    <li>Cappuccino - 100 rub.</li>
                    <li>Latte - 100 rub.</li>
                    <li>Tea in assortment - 80 rub.</li>
                    <li>Sugar - free</li>
                    <li>Deserts - 80 - 160 rub.</li>
                </ul>
            </div>
            <div className={styles.newsBlock}>
                Stories about coffee! API with coffee news!
            </div>
        </div>
    )
}

export default Content
