import React, { Component, Fragment } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./TodoStyle.scss";

class TodoView extends Component {
  render() {
    return (
      <Fragment>
        <section className="todo-intro__container">
          <div className="todo-intro__content">
            <h1 className="todo-intro__title">TODO LIST</h1>
            <p className="todo-intro__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              totam.
            </p>
          </div>
        </section>
        <div className="box__container">
          <TodoInput />
          <TodoList />
        </div>
      </Fragment>
    );
  }
}

export default TodoView;
