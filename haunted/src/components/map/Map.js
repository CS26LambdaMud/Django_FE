import React, { Component } from 'react'
import './Map.css'

class Map extends React.Component {

  render(){
    return(
      <div class='map'>
        <canvas ref='canvas' width={ 640 } height={ 425 } />
      </div>
    )
  }
}

export default Map
