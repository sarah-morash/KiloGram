import React, { Component } from "react";
import Header from "../components/Header";
import CreateAccountForm from "../components/CreateAccountForm";

export default class CreateAccount extends Component {
  render() {
    return (
      <div>
        <Header />
        <CreateAccountForm />
      </div>
    );
  }
}
