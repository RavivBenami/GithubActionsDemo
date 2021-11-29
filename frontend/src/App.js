import logo from './logo.svg';
import './App.css';

import React, {Component } from 'react';
import MainComp from './Components/MainComp';
import { connect } from 'react-redux';
import NavigationComp from './Components/NavigationComp'


class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
    <div className="App">
      <NavigationComp/>
    </div>
    )
  }
}


export default App;
