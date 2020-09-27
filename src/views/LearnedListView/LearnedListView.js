import React from 'react'
import AppContext from '../../context'
import SongsList from '../../components/SongsList/SongsList'
import { useSelector } from 'react-redux'



const LearnedListView = () => {

    const songs = useSelector(store=> store.songs) 
    return (
        <AppContext.Consumer>

            {
                (context) => (

                    <div className="main">
                        <h1>Already learned songs</h1>
                       
                  <SongsList
                   deleteSong={context.deleteSong}
                   songList={songs.filter(song => {
                            return (song.progress === "100")
                        })} /> 

                    </div>

                )}
        </AppContext.Consumer>


    )
}



export default LearnedListView





