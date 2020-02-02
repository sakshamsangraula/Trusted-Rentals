import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import { Menu, Icon, AutoComplete, Button, message } from "antd";
import { Link } from "react-router-dom";
import { signInWithGoogle } from '../../firebase/firebase.utils';
import Logo from "./logo.PNG";

//C:\Users\Rocketship\Documents\GitHub\carproject-frontend

const { SubMenu } = Menu;

const cities = {
  Alaska: ["Anchorage", "Juneau"],
  Oregon: ["Portland", "Salem"],
  Texas: ["San Antonio", "Dallas", "Houston"]
};

const states = ["Alaska", "Oregon", "Texas"];

var isLoggedIn = 0;

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

      <img src={Logo} alt="Trusted Rentals Logo" />

      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to ="/"></Link>
          <Icon type="home" />
          Home
        </Menu.Item>

        <Menu.Item key="about">
          <Link to='/about'></Link>
          <Icon type="question-circle" />
          About
        </Menu.Item>

        <Menu.Item key="contact">
          <Link to='/contact'></Link>
          <Icon type="message" />
          Contact
        </Menu.Item>

        <SubMenu
              title={
                <span className="submenu-title-wrapper" onClick={signInWithGoogle}>
                      <Icon type="user" />
                      My Account
                </span>
              }
              >
                  <Menu.Item key="setting:1"><Icon type="car" />My Cars</Menu.Item>
                  <Menu.Item key="setting:1"><Icon type="setting" />Settings</Menu.Item>
        </SubMenu>
      </Menu>

      <br />

        <Directory />
        <br />
        <AutoComplete
          onSearch={this.onSearch}
          onSelect={this.onSelect}
          dataSource={possibleStates}
          placeholder="Enter State"
        ></AutoComplete>
        <br />
        <AutoComplete
          disabled={!showCitySelect}
          dataSource={cities[state]}
          onSelect={this.onSelectCity}
          placeholder="Enter City"
        ></AutoComplete>
        <br />
        {searchLink}
      </div>
    );
  }
}

export default HomePage;
