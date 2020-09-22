import React from 'react'
import AppContext from '../../context'
import SongsList from './../../components/SongsList/SongsList'
import {connect} from 'react-redux'


const ToLearnListView = ({songs}) => {

    return (
        <AppContext.Consumer>

            {
            (context) => (


                    <div className="main">
                        <h1>Songs planned to learn</h1>

                    <SongsList
                     deleteSong={context.deleteSong}
                     songList={songs.filter(song => {
                            return (song.progress < 1)
                        })} />

                    </div>

                )}
        </AppContext.Consumer>
    )

}

const mapStateToProps = state =>({
    songs: state.songs
})

export default connect(mapStateToProps)(ToLearnListView)