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
                   <a href='/'> <li>Americano - 80 rub.</li> </a>
                  <a href='/'>  <li>Cappuccino - 100 rub.</li> </a>
                  <a href='/'>  <li>Latte - 100 rub.</li> </a>
                    <a href='/'> <li>Tea in assortment - 80 rub.</li> </a>
                    <a href='/'> <li>Sugar - free</li> </a>
                    <a href='/'> <li>Deserts - 80 - 160 rub.</li> </a>
                </ul>
            </div>
            <div className={styles.newsBlock}>
                Stories about coffee! API with coffee news!
            </div>
        </div>
    )
}

export default Content
