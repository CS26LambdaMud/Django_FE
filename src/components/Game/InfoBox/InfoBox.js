import React from 'react'

 const InfoBox = (props) => {
     console.log('props', props)
    return (
        <div>
            {props.moveData &&
            <p>
                {props.moveData.name} is currently in room {props.moveData.pos_x}{props.moveData.pos_y}.
            </p> }
        </div>
    )
}

export default InfoBox;