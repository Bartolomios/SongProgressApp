import React from 'react';
import styles from './SongsList.module.scss';
import SongItem from './SongItem/SongItem';



const SongsList = ({songList}) => {  

    
        return( 
            <ul className={styles.songsWrapper}>

                {songList.songs.map(item => (
                    <SongItem
                    key={item.name} 
                   {...item} />
                ))
                }
               
                

            </ul>
        )
    
}

export default SongsList