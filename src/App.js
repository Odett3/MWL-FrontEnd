import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Feed from "./pages/Feed";
import IndividualListing from "./pages/IndividualListing";
import UserProfile from "./components/UserProfile";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import CreateListing from "./pages/CreateListing";
import Header from "./components/Navigation";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/create" component={CreateListing} />
        <Route path="/feed/:id" component={IndividualListing} />
        <Route path="/user/:id" component={UserProfile} />
      </Switch>
    </>
  );
}

export default App;
