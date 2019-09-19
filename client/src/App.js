import React, { Component } from 'react'
import NewNote from './components/NewNote'

export class App extends Component {

  

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <NewNote/>
      </div>
    )
  }
}

export default App

