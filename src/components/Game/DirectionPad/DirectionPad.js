import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../../utils/AxiosWithAuth';
import InfoBox from '../InfoBox/InfoBox'
import './DirectionPad.scss'

const DirectionPad = (props) => {
    const [direction, setDirection] = useState('')
    const [moveData,setMoveData] = useState('')

    const handleSubmit = e => {
        setDirection(e.target.value);
        axiosWithAuth().post("/adv/move/", {"direction": e.target.value }).then(res => {
            props.onMove(res.data);
        }).catch(err => {
            console.log(err);
        });
    }


    return (
        <div>
            <button value="n" onClick={handleSubmit} className="north"></button>
            <button value="s" onClick={handleSubmit} className="south"></button>
            <br/>
            <button value="w" onClick={handleSubmit} className="west"></button>
            <button value="e" onClick={handleSubmit} className="east"></button>
            <InfoBox moveData={moveData} />
        </div >
    );
}

export default DirectionPad;