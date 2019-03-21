import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Board from './components/Board';
import TicketsForm from './components/TicketsForm';

class App extends Component {
  // <TicketForm/> tiene una propiedad llamada onAddTicket y tienen un método encargado de almacenar datos dentro de la aplicación.
  render(){
    return (
      <div className="App">
      <Navigation/>
      <img src={logo} className="App-logo" alt="logo"></img>
      <TicketsForm onAddTicket={this.handleAddTicket}/> 
       <Board/>
       
        
     
      </div>
    )
  }
}

export default App;