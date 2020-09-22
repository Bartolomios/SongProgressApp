import React from 'react'
import AppContext from '../../context'
import SongsList from './../../components/SongsList/SongsList'
import { connect } from 'react-redux'


const ProgressListView = ({songs}) => {

    

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
const mapStateToProps = state =>({
    songs: state.songs
})

export default connect(mapStateToProps)(ProgressListView)