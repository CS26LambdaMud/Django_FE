import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import {drawMap, roomTypes, mapSize, roomSize} from "./game_helpers.js"

const Game = () => {
    const [mapData, setMapData] = useState(null);
    const canvasRef = useRef(null);    

    useEffect(() => {
        axios.get("https://advapi.herokuapp.com/api/adv/allmaps")
        .then(res => {
            setMapData(res.data);  
            drawMap(canvasRef.current, res.data);
        })
        .catch(err => console.log(err));
    }, []);
    
    if(mapData === null)
        return <p>Loading map data</p>;
    
    return <>
      <canvas width={mapSize * roomSize} height={mapSize * roomSize} ref={canvasRef}/>
    </>;
}

export default Game