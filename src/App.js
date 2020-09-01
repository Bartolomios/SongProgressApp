import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ProgressListView from './views/ProgressListView/ProgressListView'
import OthersView from './views/OthersView/OthersView'
import ToLearnListView from './views/ToLearnListView/ToLearnListView'
import Form from './components/Form/Form'
import AppContext from './context'
import SongItemEdit from './components/SongsList/SongItemEdit/SongItemEdit';


const App = () => {

  const [songs, setSongs] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)
  
  
const fetchSongs = () =>{
  fetch("http://localhost:4000/songs")
    .then(res => {
      if (res.ok) {
        return res
      }
      throw Error(res.status)
    })
    .then(res => res.json())
    .then(res => (
      setSongs(res)
    ))
    .catch(error => console.log(`błąd ${error}`))
}

useEffect(() => {
  
  fetchSongs()  
   
}, [])



 const showModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {    
    setModalOpen(false)    
  }

  const postSong = (newSong) =>{
    const requestOptions = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newSong)
    }

    fetch("http://localhost:4000/songs", requestOptions)
      .then(
        async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error)
          }
          else {
            console.log("Succes! Song has been sent")
          }

        })
      .catch(error => {
        console.error('There was an error!', error)
      })
  }

  const addSong = (e) => {
    e.preventDefault()
    const newSong = {
      name: e.target[0].value,
      description: e.target[1].value,
      link: e.target[2].value,
      progress:e.target[3].value
    }
    setSongs(prevSongs => (
    [...prevSongs, newSong]      
    ));
    
    e.target.reset()
    setModalOpen(false)
    postSong(newSong)
    fetchSongs()  
  }

  const deleteSong = (id) => {
    console.log("deleted" + id)
    const requestOptions = {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },

    }

    fetch(`http://localhost:4000/songs/${id}`, requestOptions)
      .then(
        async response => {
          const data = await response.json()
          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error)
          }
          else {
            console.log("Succes! Song has been deleted")
          }

        })
      .catch(error => {
        console.error('There was an error!', error)
      })
    fetchSongs()  
  }
  

  
  return(

   <BrowserRouter>
   <AppContext.Provider
    value={{
      songs,
      deleteSong: deleteSong
    }}>
        <Header showModal={showModal}/>
   { isModalOpen && <Form addSong={addSong} closeModal={closeModal}/> } 
      <Switch>
        <Route exact path="/" component={ProgressListView} />
        <Route path="/to-learn" component={ToLearnListView} />
        <Route path="/learned" component={OthersView} />
        <Route exact path="/songs/:id" component={SongItemEdit} />
      </Switch>
   </AppContext.Provider>
    </BrowserRouter>
  )
  

}


export default App
