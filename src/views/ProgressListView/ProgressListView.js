import React from 'react'
import AppContext from '../../context'
import SongsList from './../../components/SongsList/SongsList'
import { useSelector } from 'react-redux'


const ProgressListView = () => {

    const songs = useSelector(store => store.songs)

    return (
        <AppContext.Consumer>
        
        {             
                (context) => (                 
                    
        <div className="main">
            <h1>Progress list</h1>

                <SongsList
                 deleteSong={context.deleteSong}
                 songList={songs.filter(song =>{
                    return (song.progress < 100 && song.progress > 0)
                })}/>
       
        </div>

                )
        }
        </AppContext.Consumer>
          
        
    )
}

export default ProgressListView