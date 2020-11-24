import React from "react"
function IdCard(props) {
  return (
    <div className="card mb-3" style={{ 'maxWidth': '540px' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.picture} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text"><strong>First Name: </strong>{props.firstName}</p>
            <p className="card-text"><strong>Last Name:</strong> {props.lastName}</p>
             <p className="card-text"><strong>Gender: </strong>{props.gender}</p>
             <p className="card-text"><strong>Height: </strong>{props.height}</p>
             <p className="card-text"><strong>Birth: </strong>{props.birth} </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
