import React from 'react';
function Random(props) {
    return (
        <h3>Random value between {props.min} and {props.max} ={">"} {Math.floor(Math.random() * (props.max - props.min) ) + props.min} </h3>
        )
}

export default Random;
