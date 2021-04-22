import React from 'react'

const Character = (props) => {
    return (
        
        <div styl={{marginBottom: 10}}>
            <h4>
            {props.name}
            </h4>
        <img src={props.image} alt={props.name}></img>
        </div>
    )
}

export default Character
