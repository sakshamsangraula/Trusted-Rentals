import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import { AutoComplete, Button, message } from "antd";
import { Link } from "react-router-dom";

const cities = {
  Alaska: ["Anchorage", "Juneau"],
  Oregon: ["Portland", "Salem"],
  Texas: ["San Antonio", "Dallas", "Houston"]
};

const states = ["Alaska", "Oregon", "Texas"];

// Directory component is rendered in a div and HomePage component is exported for App.js to import
class HomePage extends React.Component {
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

  onSelect = state => {
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
        <Link to="/smartcontract">
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
        <Directory />
        <AutoComplete
          onSearch={this.onSearch}
          onSelect={this.onSelect}
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

export default HomePage;
