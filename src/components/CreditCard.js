import React from 'react';
function CreditCard(props) {
  return (
    <div className="card" style={{"backgroundColor": `${props.bgColor}`, "color": `${props.color}`}}>
    <div className="card-body">
      <h5 className="card-title">{props.number}</h5>
      <p className="card-text">Expires {props.expirationMonth}/{props.expirationYear}            {props.bank}</p>
      <p>{props.owner}</p>
    </div>
  </div>
  )
}

export default CreditCard;
