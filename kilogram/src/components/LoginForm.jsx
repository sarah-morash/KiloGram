import React, { Component } from "react";

export default class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      isDisabled: true,
      email: "",
      password: ""
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.isDisabled = !(nextState.email && nextState.password);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className="LoginForm">
        <h2>LOGIN</h2>
        <form action="/users" method="POST">
          <fieldset>
            <input
              type="text"
              placeholder="Email"
              name="user[email]"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
            <input
              type="text"
              placeholder="Password"
              name="user[password]"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
            <button type="submit" disabled={this.state.isDisabled}>
              Login
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}
