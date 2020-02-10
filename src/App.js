import React, { Component } from 'react'
import './App.scss'
import { func } from 'prop-types'
import NavBar from "./components/NavBar/NavBar"
import TourList from "./components/TourList/index"

class App extends Component {

  render(){
      return(
        <div>
          <NavBar />
          <TourList />
        </div>
      )
  }

}

export default App;
