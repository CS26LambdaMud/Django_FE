import React, { Component } from 'react'
import './Map.css'
import axios from 'axios'

class Map extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      room: {
          x: '',
          y: ''
        }
      }
    }

    map_obj = () => {
      console.log('button pressed')

    }

  render(){
    return(
      <div>
      <h1> Haunted </h1>
        <canvas className='map' ref='canvas' width={ 720 } height={ 450 }> </canvas>

        <br/>

        <button
          type="button"
          onClick={this.map_obj}
          >
          Start Game
        </button>
      </div>
    )
  }
}

export default Map
