import React, { Fragment } from 'react';
import { createUserProfileDocument } from './firebase/firebase.utils';

export default class SelectCar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: 'Toyota'
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
      return (
          <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select your car:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Toyota Camry">Toyota Camry</option>
              <option value="Toyota Corolla">Toyota Corolla</option>
              <option value="Ford">Ford</option>
              <option value="SUV">SUV</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <createUserProfileDocument value = { this.handleChange } />

          </Fragment>

      );
    }

  }