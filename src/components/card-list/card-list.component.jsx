import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
       <div className='card-list'>
         {props.cars.map(car => 
            (<Card key= {car.id} car = {car}/>
      ))}
      </div>
   );