import React from 'react'
import styles from './Settings.module.css'
import VolumeSetting from "./VolumeSetting/VolumeSetting";
import {Switch} from "@material-ui/core";
import ActionButton from "./ActionButton/ActionButton";

const Settings = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.settingItems}>
                <VolumeSetting />
                <div>Сахар? <Switch /> <ActionButton/> </div>
                <div>Корица? <Switch /></div>
                <div>Сумма: 120руб. (Капучино 300мл., 2 сахара)</div>
                <div>Оплата Банковской картой Наличными(только для зарегистрированных гостей)</div>
            </div>
        </div>
    )
}

export default Settings
