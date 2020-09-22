import React from 'react';
import styles from './SongsList.module.scss';
import SongItem from './SongItem/SongItem';

const SongsList = ({songList, deleteSong}) => {  
        
        return( 
        
            
            <ul className={styles.songsWrapper}>
               
               {songList.map(item => (
                    <SongItem
                    deleteSong = {deleteSong}
                    id={item.id}
                    key={item.name} 
                   {...item} />
                ))
               }              

            </ul>
            
        )
    
}

export default SongsList