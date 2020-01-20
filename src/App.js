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
import FilteredSelection from './filterstatesandcities';

const RentPage = () => (
  <div>
  
    <h1 class="rent-title">RENT PAGE</h1>
    <img class="rent-img" src={SelectState} alt="select a state" />
    <FilteredSelection />
    
  </div>
);




export const CarSelection = props => (
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

    <FilteredSelection />

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
          <Route exact path="/states/cities/cars" component={CarSelection} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
          <Route exact path="/states/cities/cars/smartcontract" component={smartContract} />
        </Switch>
      </div>
    );
  }
}
// sfc tab

export default App;
