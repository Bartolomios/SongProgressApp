import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ProgressListView from './views/ProgressListView/ProgressListView'
import OthersView from './views/OthersView/OthersView'
import ToLearnListView from './views/ToLearnListView/ToLearnListView'
import Form from './components/Form/Form'
import AppContext from './context'

const initialStateSongs = [
  {
    name: "Deep Purple - Smoke on the water",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus velit at euismod commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    link: ""
  },
  {
    name: "The Offspring - The kids aren't alright",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus velit at euismod commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    link: ""
  },
  {
    name: "System Of A Down - Lonely Day ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus velit at euismod commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    link: ""
  },
  {
    name: "Metallica - Enter Sandman",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus velit at euismod commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    link: ""
  },
  {
    name: "Dire Straits - Sultans Of Swing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus velit at euismod commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    link: ""
  },
  {
    name: "Metallica - Nothing Else Matters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus velit at euismod commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    link: ""
  }

]

class App extends Component {

  state = {
    songs: [...initialStateSongs],
    isModalOpen: false,
    name:"Bartek"
  }




   showModal = () => {

    this.setState({
      isModalOpen: true
    })
  }
  closeModal = () => {

    this.setState({
      isModalOpen: false
    })
  }
  addSong = (e) => {
    e.preventDefault();
    const newSong = {
      name: e.target[0].value,
      description: e.target[1].value,
      link: e.target[2].value,
    }
    this.setState(prevState => ({
    songs:[...prevState.songs, newSong]
      
    }))
    e.target.reset();
    this.setState({
      isModalOpen: false
    })
  }

  
  render(){
    const {isModalOpen} = this.state
    const contextElements ={
      ...this.state,
    }
  return(

    
    <BrowserRouter>
   <AppContext.Provider value={contextElements}>
        <Header showModal={this.showModal}/>
   { isModalOpen && <Form addSong={this.addSong} closeModal={this.closeModal}/> } 
      <Switch>
        <Route exact path="/" component={ProgressListView} />
        <Route path="/to-learn" component={ToLearnListView} />
        <Route path="/others" component={OthersView} />
      </Switch>
   </AppContext.Provider>
    </BrowserRouter>
  );

  }
}

export default App;
