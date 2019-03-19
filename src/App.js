import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Board from './components/Board';
import TicketsForm from './components/TicketsForm';

class App extends Component {
  
  render(){
    return (
      <div className="App">
      <Navigation/>
      <img src={logo} className="App-logo" alt="logo"></img>
      <TicketsForm/>
       <Board/>
       
        
     
      </div>
    )
  }
}

export default App;