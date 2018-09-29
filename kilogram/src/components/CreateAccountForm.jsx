import React, { Component } from "react";

export default class CreateAccountForm extends Component {
  render() {
    return (
      <div className="CreateAccountForm">
        <h2>Create Account</h2>
        <form action="/users" method="POST">
          <input type="text" placeholder="Email" name="user[email]" />
          <input type="text" placeholder="Password" name="user[password]" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
