import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './RentalCar.css';
import {SearchBox} from './components/searchbox/search-box.component';
import { currentUser } from './App.js';
import { createUserProfileDocument } from './firebase/firebase.utils';

class RentalCar extends Component{

  constructor()
  {
    super();

      this.state = {
   cars: [],
   searchField: ""

  };

  }

  componentDidMount()
  {
    fetch('https://console.firebase.google.com/project/surgesignin/database/firestore/data~2Fusers~2FYXekZAoi5ZQlzjf6QTq4ITXzQ153')
    .then(users => {this.setState({cars: users})});
  }

  render()
  {
    const {cars, searchField} = this.state;
    const filteredCars = cars.filter(car => 
      car.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="RentalCar">
    <h1>Search for the type of car</h1>
    <SearchBox
     placeholder='search for a car'
     handleChange = {e => 
      this.setState({searchField: e.target.value})}/>
      <createUserProfileDocument car={searchField} />
      <CardList cars={filteredCars}/>
    </div>
  );
}
}

export default RentalCar;
