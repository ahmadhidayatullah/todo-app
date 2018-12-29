import React, { Component, Fragment } from "react";

class TodoInput extends Component {
  render() {
    return (
      <div className="todo-input-group__container">
        <div className="todo-input__wrapper">
          <input
            className="input input--large"
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>

        <div className="todo-button__wrapper">
          <button className="btn btn--large btn--orange">Add Todo</button>
        </div>
      </div>
    );
  }
}

export default TodoInput;
