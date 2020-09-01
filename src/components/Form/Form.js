import React, {useState} from 'react'
import styles from './Form.module.scss'

const Form = ({addSong, closeModal}) => {

    
    const [range, setRange] = useState(0);
    const handleRangeInput = (e) => {
        setRange(e.target.value)

    }
    
    return (
        
        <div id="form" className={styles.formContainer}>
        <form onSubmit={addSong}>
            <h3>Add new song</h3>
            <input className={styles.input} required type="text" placeholder="Song name"></input>            
            <textarea className={styles.input} placeholder="Adnotation"></textarea>
            <input className={styles.input} required type="text" placeholder="Song link"></input>
            <label className={styles.progressBar}>Your Progress:
            <div className={styles.rangeDiv}><input onChange={handleRangeInput} type="range" min="0" max="100" value={range} />
            <span className={styles.percentageValue}>{range}%</span></div>
            </label>        
            <button type="submit" className={styles.submitButton}>Add Song</button>
         </form>
            <button className={styles.closeButton} onClick={closeModal}></button>
        </div>
    )
}

export default Form
