import React from 'react'
import styles from './SongItem.module.scss'
import PropTypes from 'prop-types'

const SongItem = ({name, description, link}) =>(


    <li className={styles.songItem}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>listen the song</a>
    </li>

);

SongItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string
}

export default SongItem;