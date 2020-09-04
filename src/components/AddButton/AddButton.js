import React from 'react'
import styles from './AddButton.module.scss'

const AddButton = ({ showModal }) => {
    return (
        <button onClick={showModal} className={styles.addButton}></button>
    )
}

export default AddButton
