import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default class App extends Component {
  constructor() {
    super();

    this.state = { isAuthenticated: false };
  }

  render() {
    if (this.state.isAuthenticated) {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      );
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect to="/login" from="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}
