import React, { Component } from 'react';
import Header from './components/Header/Header';
import styles from './App.module.scss';

class App extends Component {
  
  render(){


  return(
    <div class={styles.mainWrapper}>
    <Header />
   <h1>Hello my App</h1>
    </div>
  );

  }
}

export default App;
