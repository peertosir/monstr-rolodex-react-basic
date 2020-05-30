import React from 'react';
import './card.styles.css';

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="moster"
        src={`https://robohash.org/${props.monster.id}?set=set2`}
      />
      <h2>
        {props.monster.first_name} {props.monster.last_name}
      </h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
