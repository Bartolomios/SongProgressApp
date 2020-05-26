import React from 'react'
import styles from './Form.module.scss'

const Form = ({addSong, closeModal}) => {
      
    
    return (
        
        <div id="form" className={styles.formContainer}>
        <form onSubmit={addSong}>
            <h3>Add new song</h3>
            <input className={styles.input} required type="text" placeholder="Song name"></input>            
            <textarea required className={styles.input} placeholder="Description"></textarea>
            <input className={styles.input} required type="text" placeholder="Song link"></input>
            <button type="submit" className={styles.submitButton}>Add Song</button>
         </form>
            <button className={styles.closeButton} onClick={closeModal}></button>
        </div>
    )
}

export default Form
