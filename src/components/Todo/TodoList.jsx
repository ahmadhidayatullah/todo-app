import React, { Component } from "react";

const List = props => {
  return (
    <li className="todo-list__item">
      <div className="todo-list__item">
        <input type="checkbox" id={`checkbox-${props.number}`} />
        <label
          className={
            props.complete === "0" ? "" : "todo-list__item-label-through"
          }
          htmlFor={`checkbox-${props.number}`}
        >
          {props.name}
        </label>
      </div>
      <span className="todo-list__item-action">Delete</span>
    </li>
  );
};

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list__container">
        <h2 className="todo-list__title">Todo List</h2>
        <ul className="todo-list__content">
          <List number="1" name="Belajar Golang" complete="0" />
          <List number="2" name="Belajar React" />
        </ul>
      </div>
    );
  }
}

export default TodoList;
