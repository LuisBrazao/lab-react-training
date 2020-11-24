import React from "react"
import Rating from "./Rating"
function DriverCard(props) {
  return (
    <div className="card mb-3" style={{ 'maxWidth': '540px' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.img} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">{props.name}</p>
            <p className="card-text"> <Rating>{props.rating}</Rating> </p>
             <p className="card-text">{props.car.model} - {props.car.licensePlate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
