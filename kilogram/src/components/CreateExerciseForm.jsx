import React, { Component } from "react";

export default class CreateExerciseForm extends Component {
  render() {
    return (
      <div>
        <h2>New Exercise</h2>
        <form action="/exercises" method="POST">
          <input type="text" placeholder="Exercise Name" name="exercise" />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}
