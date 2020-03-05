import React, {useState, useEffect, useRef} from "react";
import axios from "axios";

//aliases for types of rooms in map object from server
const roomTypes = {
  crossable: 1,
  notCrossable: 2
}


const Map = () => {
    const [mapData, setMapData] = useState(null);
    const room_size = 100; //size of rooms (squares) in pixels
    const canvas = useRef(null);

    const drawMap = () => {

    }

    useEffect(() => {
        axios.get("https://advapi.herokuapp.com/api/adv/map")
        .then(res => {
            setMapData(Object.values(res.data));    
            canvas.current = <canvas width="2000" height="2000" ref={canvas}/>
        })
        .catch(err => console.log(err));
    }, []);
    
    if(mapData === null)
        return <p>Loading map data</p>;
    
    console.log(mapData);
    return <></>;
}

export default Map