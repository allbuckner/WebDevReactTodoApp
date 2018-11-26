import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
      <form id="todo-form">
          <input id="newTitle"  type="text"  placeholder="Type a New ToDo..."/>
          <button id="newsubmit">+</button>
      </form>
    );
  }
}

export default NewTodo;
