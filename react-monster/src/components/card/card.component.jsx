import React from "react";
import "./card.style.css";
export const Card = props => (
  <div className="card-container">
    <div>
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set1&size=200x200`}
      />
    </div>
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
