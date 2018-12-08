import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {


  completeItem = e => {
    const complete = {check: 0}
    this.setState({
      complete,
    })
  }

  createTodo = item => {
    return (
      <div key={item.key} id="newtodo">
      <input type="checkbox" className="check"/>
      <p>{item.text}</p>
      <button className="delete" onClick={() =>
      this.props.deleteItem(item.key)}>
      -
      </button>
    </div>
    )
  }

  render() {
      const todoEntries = this.props.entries
      const listItems = todoEntries.map(this.createTodo)

        return <ul className="list">{listItems}</ul>
  }
}

export default Todo;
