const songs = (state = [], action) => {
   
    switch(action.type){
        case 'ADD_SONG':
            return action.song
            
            
        default:
            return state;
    }
}

export default songs