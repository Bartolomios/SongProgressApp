import React from 'react';
import styles from './SongList.modile.scss';

class SongList extends Component{

    render()
    {
        return( 
            <ul className={styles.songsWrapper}>
                <li>Piosenka 1</li>
                <li>Piosenka 2</li>
                <li>Piosenka 3</li>
            </ul>
        );
    }
}

export default SongList