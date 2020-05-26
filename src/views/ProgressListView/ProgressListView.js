import React from 'react'
import AppContext from '../../context'
import SongsList from './../../components/SongsList/SongsList'



const ProgressListView = () => {
    return (
        <AppContext.Consumer>
        {
                (context) => (   
        <div className="main">
            <h1>This is ProgressListView</h1>

                <SongsList songList={context}/>
       
        </div>

                )}
        </AppContext.Consumer>
          
        
    )
}
export default ProgressListView