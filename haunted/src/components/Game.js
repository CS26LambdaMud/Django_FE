import React, {useState, useEffect, useRef} from "react";
import axios from "axios";

const Game = () => {
    const [map, setMap] = useState(null);
    const room_size = 100; //size of rooms (squares) in pixels
    const canvas = useRef(null);

    const drawMap = () => {

    }

    useEffect(() => {
        axios.get("https://advapi.herokuapp.com/api/adv/map")
        .then(res => {
            setMap(Object.values(res.data));

            
        })
        .catch(err => console.log(err));
    }, []);
    
    if(map === null)
        return <p>Loading map data</p>;
    
    console.log(map);
    return <></>;
}

export default Game