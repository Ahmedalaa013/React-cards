import React from "react";
const Cards = (props) => {
  return (
    <div className="col">
      <div className="card text-center">
        <img className="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.email}</p>
          <p>{props.phone}</p>
          <p>{props.website}</p>
          <button
            className="btn btn-primary"
            onClick={(event) => props.delete(props.id)}
          >
            Delete Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
