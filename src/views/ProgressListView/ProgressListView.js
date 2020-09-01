import React from 'react'
import AppContext from '../../context'
import SongsList from './../../components/SongsList/SongsList'



const ProgressListView = () => {

    

    return (
        <AppContext.Consumer>
        
        {             
                (context) => (   
               
                    
        <div className="main">
            <h1>Progress list</h1>

                <SongsList deleteSong={context.deleteSong} songList={context.songs.filter(song =>{
                    return (song.progress < 100 && song.progress > 0)
                })}/>
       
        </div>

                )}
        </AppContext.Consumer>
          
        
    )
}
export default ProgressListView