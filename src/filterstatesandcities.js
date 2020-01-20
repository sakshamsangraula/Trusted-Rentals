import React from 'react';
import { AutoComplete, Button, message } from "antd";
import { Link } from "react-router-dom";

const cities = {
  Alaska: ["Anchorage", "Juneau"],
  Oregon: ["Portland", "Salem"],
  Texas: ["San Antonio", "Dallas", "Houston"]
};

const states = ["Alaska", "Oregon", "Texas"];

// Directory component is rendered in a div and HomePage component is exported for App.js to import
class FilteredSelection extends React.Component {
  state = {
    state: null,
    city: null,
    possibleStates: states
  };

  onSearch = text => {
    const filteredStates = states.filter(state =>
      state.toLowerCase().startsWith(text.toLowerCase())
    );

    this.setState({
      possibleStates: filteredStates
    });
  };

  onSelectState = state => {
    console.log("State selected ", state);
    this.setState({
      state: state
    });
  };

  onSelectCity = city => {
    this.setState({
      city: city
    });
  };

  render() {
    const { possibleStates, state, city } = this.state;

    const showCitySelect = state !== null;

    let searchLink = undefined;

    if (state !== null && city !== null) {
      searchLink = (
        <Link to="/states/cities/cars">
          <Button primary>Search</Button>
        </Link>
      );
    } else {
      searchLink = (
        <Button
          primary
          onClick={() => {
            message.info(
              "Please enter both the state and city before searching"
            );
          }}
        >
          Search
        </Button>
      );
    }

    return (
      <div className="homepage">
        <AutoComplete
          onSearch={this.onSearch}
          onSelect={this.onSelectState}
          dataSource={possibleStates}
        ></AutoComplete>
        <AutoComplete
          disabled={!showCitySelect}
          dataSource={cities[state]}
          onSelect={this.onSelectCity}
        ></AutoComplete>
        {searchLink}
      </div>
    );
  }
}

export default FilteredSelection;