import "antd/dist/antd.css";
import "firebase/firestore";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component.jsx";
import Contract from "./contract";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./rentpagestates.styles.scss";
import SelectCar from "./select";
import SelectState from "./selecttag.JPG";

const RentPage = () => (
  <div>
    <h1 class="rent-title">RENT PAGE</h1>
    <img class="rent-img" src={SelectState} alt="select a state" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      {" "}
      &nbsp;Alabama
    </Link>
    <Link className="rentpagestates" to="/states">
      {" "}
      &nbsp;Alaska
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Arizona
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Arkansas
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;California
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Colorado
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Connecticut
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp; &nbsp;Delaware
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      &nbsp;Florida
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Georgia
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Hawaii
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Idaho
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Illinois
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Indiana
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;Iowa
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;Kansas
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp; &nbsp;Kentucky
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      Louisiana
    </Link>
    <Link className="rentpagestates" to="/states">
      Maine
    </Link>
    <Link className="rentpagestates" to="/states">
      Maryland
    </Link>
    <Link className="rentpagestates" to="/states">
      Massachusetts
    </Link>
    <Link className="rentpagestates" to="/states">
      Michigan
    </Link>
    <Link className="rentpagestates" to="/states">
      Minnesota
    </Link>
    <Link className="rentpagestates" to="/states">
      Mississippi
    </Link>
    <Link className="rentpagestates" to="/states">
      Missouri
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      &nbsp;Nebraska
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;Nevada
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;New Hampshire
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;New Jersey
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;New Mexico
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;New York
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;North Carolina
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;North Dakota
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;Ohio
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;Oklahoma
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;Oregon
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;Pennsylvania
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;Rhode Island
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;South Carolina
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;&nbsp;South Dakota&nbsp;
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;&nbsp;Tennessee&nbsp;&nbsp;
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;Texas&nbsp;&nbsp;&nbsp;
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Utah&nbsp;&nbsp;&nbsp;
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vermont
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virginia&nbsp;
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Washington
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      West Virginia
    </Link>
    <Link className="rentpagestates" to="/states">
      Wisconsin
    </Link>
    <Link className="rentpagestates" to="/states">
      Wyoming
    </Link>
  </div>
);

class StatePage extends React.Component {
  state = {
    name: ""
  };
}
const States = () => (
  <div>
    <h1 className="rent-title">Select a City</h1>
    <Link className="rentpagestates" to="/cities">
      Houston
    </Link>
    <Link className="rentpagestates" to="/cities">
      Galveston
    </Link>
    <Link className="rentpagestates" to="/cities">
      Corpus Christi
    </Link>
    <Link className="rentpagestates" to="/cities">
      San Antonio
    </Link>
    <Link className="rentpagestates" to="/cities">
      El Paso
    </Link>
    <Link className="rentpagestates" to="/cities">
      Fort Worth
    </Link>
    <Link className="rentpagestates" to="/cities">
      South Padre Island
    </Link>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Link className="rentpagestates" to="/cities">
      Dallas
    </Link>
    <Link className="rentpagestates" to="/cities">
      Austin
    </Link>
    <Link className="rentpagestates" to="/cities">
      Waco
    </Link>
    <Link className="rentpagestates" to="/cities">
      Armarillo
    </Link>
    <Link className="rentpagestates" to="/cities">
      Plano
    </Link>
    <Link className="rentpagestates" to="/cities">
      McAllen
    </Link>
    <Link className="rentpagestates" to="/cities">
      Laredo
    </Link>
    <Link className="rentpagestates" to="/cities">
      Odessa
    </Link>
    <Link className="rentpagestates" to="/cities">
      Beaumont
    </Link>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/cities">
      Frisco
    </Link>
    <Link className="rentpagestates" to="/cities">
      Irving
    </Link>
    <Link className="rentpagestates" to="/cities">
      Fredericksburg
    </Link>
    <Link className="rentpagestates" to="/cities">
      Abilene
    </Link>
    <Link className="rentpagestates" to="/cities">
      Killeen
    </Link>
    <Link className="rentpagestates" to="/cities">
      Brownsville
    </Link>
    <Link className="rentpagestates" to="/cities">
      The Woodlands
    </Link>
    <Link className="rentpagestates" to="/cities">
      Texas City
    </Link>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/cities">
      Round Rock
    </Link>
    <Link className="rentpagestates" to="/cities">
      College Station
    </Link>
    <Link className="rentpagestates" to="/cities">
      Texarkana
    </Link>
    <Link className="rentpagestates" to="/cities">
      San Angelo
    </Link>
    <Link className="rentpagestates" to="/cities">
      San Marcos
    </Link>
    <Link className="rentpagestates" to="/cities">
      New Braunfels
    </Link>
    <Link className="rentpagestates" to="/cities">
      Wichita Falls
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/cities">
      Katy
    </Link>
    <Link className="rentpagestates" to="/cities">
      Sugar Land
    </Link>
    <Link className="rentpagestates" to="/cities">
      Lewisville
    </Link>
    <Link className="rentpagestates" to="/cities">
      McKinney
    </Link>
    <Link className="rentpagestates" to="/cities">
      Grand Praire
    </Link>
    <Link className="rentpagestates" to="/cities">
      Conroe
    </Link>
    <Link className="rentpagestates" to="/cities">
      Carrollton
    </Link>
    <Link className="rentpagestates" to="/cities">
      Praire View
    </Link>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/cities">
      Grapevine
    </Link>
    <Link className="rentpagestates" to="/cities">
      Nacogdoches
    </Link>
    <Link className="rentpagestates" to="/cities">
      Marfa
    </Link>
    <Link className="rentpagestates" to="/cities">
      Pearland
    </Link>
    <Link className="rentpagestates" to="/cities">
      Port Aransas
    </Link>
    <Link className="rentpagestates" to="/cities">
      Marble Falls
    </Link>
    <Link className="rentpagestates" to="/cities">
      Tulia
    </Link>
    <Link className="rentpagestates" to="/cities">
      Lubbock
    </Link>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/cities">
      Southlake
    </Link>
    <Link className="rentpagestates" to="/cities">
      Baytown
    </Link>
    <Link className="rentpagestates" to="/cities">
      Arlington
    </Link>
  </div>
);

export const Cities = props => (
  <fragement>
    <SelectCar />
  </fragement>
);

export const smartContract = props => (
  <Contract />
  // <Link className = "contract" to = '/contract'>Click here to enter in the contract</Link>
);

const ReturnPage = () => (
  <div>
    <h1 class="rent-title">RETURN PAGE</h1>
    <img class="rent-img" src={SelectState} alt="select a state" />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      {" "}
      &nbsp;Alabama
    </Link>
    <Link className="rentpagestates" to="/states">
      {" "}
      &nbsp;Alaska
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Arizona
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Arkansas
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;California
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Colorado
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Connecticut
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp; &nbsp;Delaware
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      &nbsp;Florida
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Georgia
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Hawaii
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Idaho
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Illinois
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;Indiana
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;Iowa
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;Kansas
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp; &nbsp;Kentucky
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      Louisiana
    </Link>
    <Link className="rentpagestates" to="/states">
      Maine
    </Link>
    <Link className="rentpagestates" to="/states">
      Maryland
    </Link>
    <Link className="rentpagestates" to="/states">
      Massachusetts
    </Link>
    <Link className="rentpagestates" to="/states">
      Michigan
    </Link>
    <Link className="rentpagestates" to="/states">
      Minnesota
    </Link>
    <Link className="rentpagestates" to="/states">
      Mississippi
    </Link>
    <Link className="rentpagestates" to="/states">
      Missouri
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      &nbsp;Nebraska
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;Nevada
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;New Hampshire
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;New Jersey
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;New Mexico
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;New York
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;North Carolina
    </Link>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;North Dakota
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;Ohio
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;Oklahoma
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;Oregon
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;Pennsylvania
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;Rhode Island
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;South Carolina
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;&nbsp;South Dakota&nbsp;
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;&nbsp;Tennessee&nbsp;&nbsp;
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;Texas&nbsp;&nbsp;&nbsp;
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Utah&nbsp;&nbsp;&nbsp;
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vermont
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virginia&nbsp;
    </Link>
    <Link className="rentpagestates" to="/states">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Washington
    </Link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link className="rentpagestates" to="/states">
      West Virginia
    </Link>
    <Link className="rentpagestates" to="/states">
      Wisconsin
    </Link>
    <Link className="rentpagestates" to="/states">
      Wyoming
    </Link>
  </div>
);

// homepage component is rendered and contained in a div and App component is exported for index.html to render App
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      search: ""
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/* // switch is useful because it only allows one route to be rendered after one route matches */}

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/rent" component={RentPage} />
          <Route exact path="/return" component={ReturnPage} />
          <Route exact path="/states" component={States} />
          <Route exact path="/cities" component={Cities} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
          <Route exact path="/contract" component={Contract} />
          <Route exact path="/smartcontract" component={smartContract} />
        </Switch>
      </div>
    );
  }
}
// sfc tab

export default App;
