import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js'

class App extends Component {
  render() {
    return (
      <div className="App" style = {{height:"100vh"}}>
        <Login className="full-height" style={{width: '100%', height: '100%'}}/>
      </div>
    );
  }
}

export default App;
