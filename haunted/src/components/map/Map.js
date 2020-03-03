import React, { Component } from 'react'
import './Map.css'

class Map extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      square : {
        x: 0,
        y: 0
      }
    }
  }



  render(){
    return(
      <div class='map'>
        <canvas ref='canvas' width={ 640 } height={ 425 } />
      </div>
    )
  }
}

export default Map
