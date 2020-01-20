import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { Cities } from './App';
import './select.css';
import './typeimg.css';
import TypeCar from './typecar.JPG';

export default class SelectCar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          term: 'Toyota Camry'
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
     handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('The Car you selected is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
// THE OPENING PARANTHESIS NEEDS TO BE ON THE SAME LINE AS THE LINE RETURN 
return (
  <div className = "search-bar">
        <img class ="typeimg" src = {TypeCar} alt = "type in a car you would like to rent" />

    <br />
    <br />
<input className = "input-style"
value = {this.state.term}
onChange = {event => this.onInputChange(event.target.value)} 
/>

<br/>
<br/>
<Link className ="submit-button" to='/states/cities/cars/smartcontract'>Submit</Link>

</div>
);
}

onInputChange(term){
this.setState({term});

}
        
        //   <Fragment>
        // <form onSubmit={this.handleSubmit}>
        //   <label>
        //     Select your car:
        //     <select value={this.state.value} onChange={this.handleChange}>
        //       <option value="Toyota Camry">Toyota Camry</option>
        //       <option value="Toyota Corolla">Toyota Corolla</option>
        //       <option value="Ford">Ford</option>
        //       <option value="SUV">SUV</option>
        //     </select>
        //   </label>
        // </form>
        // <createUserProfileDocument value = { this.state.value } />

        //   </Fragment>

        }

  