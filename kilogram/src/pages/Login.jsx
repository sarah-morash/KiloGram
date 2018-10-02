import React, { Component } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import CreateAccount from "../pages/CreateAccount";
import { Link, Route } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Header />
        <LoginForm />
        <div className="create-account">
          Or,&nbsp;
          <li>
            <Link to="/createAccount">Create an Account</Link>
          </li>
        </div>

        <Route path="/createAccount" component={CreateAccount} />
      </div>
    );
  }
}
