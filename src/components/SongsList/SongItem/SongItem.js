import React from 'react'
import styles from './SongItem.module.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SongItem = ({deleteSong, id, name, description, link, progress}) =>{  


    return(
    <li className={styles.songItem}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p>Progress: {progress}%</p>
        <div className={styles.buttonGroup}>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>listen the song</a>
        <Link className={styles.linkButton} to={`/songs/${id}`}>Edit</Link>       
        </div>
        <button className={styles.deleteButton} onClick={() => deleteSong(id)}></button>
    </li>
    )
}

SongItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    progress: PropTypes.string
}

export default SongItem;