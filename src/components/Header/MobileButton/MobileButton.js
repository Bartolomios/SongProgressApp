import React from 'react'
import styles from './MobileButton.module.scss'

const MobileButton = ({toggleHandler, isToggle}) => {
    return (
        <div className={isToggle ? `${styles.toggle}` : `${styles.toggle} ${styles.on}`} onClick={toggleHandler}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
        </div> 
    )
}


export default MobileButton