import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const RentPage = () => (
  <div>
    <h1>RENT PAGE</h1>
  </div>
)

const ReturnPage = () =>
(
  <div>
    <h1>RETURN PAGE</h1>
  </div>
)

// homepage component is rendered and contained in a div and App component is exported for index.html to render App
function App() {
  return (
    <div>
      {/* // switch is useful because it only allows one route to be rendered after one route matches */}

      <Switch>
      <Route  exact path='/' component = {HomePage} />
      <Route  path='/rent' component={RentPage} />
      <Route  path='/return' component={ReturnPage} />

      </Switch>
        
    </div>
  );
}

export default App;
