import React from 'react'
import AppContext from '../../context'
import SongsList from './../../components/SongsList/SongsList'


const OthersView = () => {
    return (
        <AppContext.Consumer>

            {

                (context) => (


                    <div className="main">
                        <h1>Already learned songs</h1>

                        <SongsList deleteSong={context.deleteSong} songList={context.songs.filter(song => {
                            return (song.progress === "100")
                        })} />

                    </div>

                )}
        </AppContext.Consumer>


    )
}
export default OthersView

