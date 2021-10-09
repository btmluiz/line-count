import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "@pages/home";

class MainRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={"/"} exact component={HomePage} />
      </Switch>
    );
  }
}

export default MainRouter
