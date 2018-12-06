import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
      <form id="todo-form" onSubmit={this.props.addItem}>
          <input
            id="newTitle"
            type="text"
            placeholder="Type a New ToDo..."
            ref={this.props.inputElement}
            value={this.props.currentItem.text}
            onChange={this.props.handleInput}
          />
          <button id="newsubmit">+</button>
      </form>
    );
  }
}

export default NewTodo;
