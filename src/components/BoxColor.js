import React from 'react';

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function BoxColor(props) {
  return (
      <div style={{"backgroundColor": `rgb(${props.r}, ${props.g}, ${props.b})`}}>
        <h1>rgb({props.r}, {props.g}, {props.b})</h1>
        <h2>{rgbToHex(props.r, props.g, props.b)}</h2>
      </div>
  )
}

export default BoxColor;
