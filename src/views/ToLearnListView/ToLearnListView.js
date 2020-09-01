import React from 'react'
import AppContext from '../../context'
import SongsList from './../../components/SongsList/SongsList'



const ToLearnListView = () => {

    return (
        <AppContext.Consumer>

            {
            (context) => (


                    <div className="main">
                        <h1>Songs planned to learn</h1>

                    <SongsList deleteSong={context.deleteSong} songList={context.songs.filter(song => {
                            return (song.progress < 1)
                        })} />

                    </div>

                )}
        </AppContext.Consumer>
    )

}
export default ToLearnListView