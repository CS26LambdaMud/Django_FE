import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../utils/AxiosWithAuth'

import './DirectionPad.scss'
import axiosWithAuth from '../../../utils/AxiosWithAuth';

const DirectionPad = (props) => {
    const [direction, setDirection] = useState('')
    const token=localStorage.getItem('token')

    const handleSubmit = e => {
        setDirection(e.target.value);
        axiosWithAuth().post("/adv/move/", {"direction": e.target.value }).then(res => {
            console.log(res.data);
            props.setMoveData(res.data);
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
        </div >
    );
}

export default DirectionPad;