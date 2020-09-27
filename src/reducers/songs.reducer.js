import { ADD_SONGS } from '../actions/songs.actions'

const songs = (state = [], action) => {
   
    switch(action.type){
        case ADD_SONGS:
            return action.songs
        default:
        return state
            
    }
}

export default songs