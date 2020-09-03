import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Feed from "./pages/Feed";
import "./style/global.scss";
import IndividualListing from "./pages/IndividualListing";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/feed" component={Feed} />
        <Route path="/feed/:id" component={IndividualListing} />
        <Route path="/user/:id" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
