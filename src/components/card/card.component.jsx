import React from 'react';
import './card.styles.css';

export const Card = (props) => (
   <div className = 'card-container' >
      <img alt="car make and model" 
      // img src needs quotes like this ``
      src={`https://robohash.org/${props.car.id}?set=set2&size=180x180`}
      />
  <h2 >{props.car.name}</h2>
  <p>{props.car.email}</p>
      </div>
);