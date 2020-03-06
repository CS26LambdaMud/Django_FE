import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import axiosWithAuth from "../../utils/AxiosWithAuth";
import {
    drawMap, 
    mapSize, 
    roomSize, 
    movePlayer
} from "./game_helpers.js"

import DirectionPad from './DirectionPad/DirectionPad'

const Game = () => {
    const [mapData, setMapData] = useState(null);
    const [moveData, setMoveData] = useState(null);
    const [initData, setInitData] = useState(null);
    const canvasRef = useRef(null);

    const onMove = data => {
        setMoveData(data);
        drawMap(canvasRef.current, mapData, {x_pos: data.pos_x, y_pos: data.pos_y});
    }

    useEffect(() => {
        axiosWithAuth().get("adv/init")
        .then(initRes => {
            setInitData(initRes.data);

            axios.get("https://advapi.herokuapp.com/api/adv/allmaps")
            .then(res => {
                setMapData(res.data); 
                drawMap(canvasRef.current, res.data, {x_pos: initRes.data.pos_x, y_pos: initRes.data.pos_y});
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }, []);
    
    if(!mapData || !initData)
        return <p>Loading map data</p>;
    
    return <>

      <canvas width={mapSize * roomSize} height={mapSize * roomSize} ref={canvasRef}/>
      <DirectionPad onMove={onMove}/>
    </>;

}

export default Game