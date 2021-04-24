import React from 'react'

const Character = (props) => {
    return (
        
        <div style={{marginBottom: 40}}>
            <h4>
            {props.name} - {props.id}
            </h4>
        <img src={props.image} alt={props.name} style={{maxWidth: 300}}></img>
        </div>
    )
}

export default Character
