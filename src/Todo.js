import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <section id="todos">
        <aside id="newtodo">
          <div id="instr">
            <p>Instructions: 1.Write a ToDo 2.Hit Submit 3.Refresh to see your Todo on the Page!</p>
          </div>
        </aside>
      </section>
    );
  }
}

export default Todo;
