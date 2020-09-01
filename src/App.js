import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Feed from "./pages/Feed";
import ListingPage from "./components/ListingPage";

function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/feed" component={Feed} />
        <Route path="/feed/:id" component={ListingPage} />
      </Switch>
    </div>
  );
}

export default App;
