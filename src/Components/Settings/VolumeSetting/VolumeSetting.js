import React from 'react'
import styles from './VolumeSetting.module.css'

const VolumeSetting = () => {
    return (
        <div className={styles.volumeSetting}>
            Объем <a href='/' title='100руб.'>200ml</a> <a href='/' title='120руб.'>300ml</a> <a href='/' title='400ml'>400ml</a>
        </div>
    )
}

export default VolumeSetting
