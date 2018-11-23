import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="App">
        <div id="topbar">
          <div id="heading">
            <p>Allen Buckners To-Do Application</p>
          </div>
        </div>
        <div id="main">
          <div id="submain">
            <section id="todos">
              <aside id="newtodo">
                <div id="instr">
                  <p>Instructions: 1.Write a ToDo 2.Hit Submit 3.Refresh to see your Todo on the Page!</p>
                </div>
                <form id="todo-form">
                    <input id="newTitle"  type="text"  placeholder="Type a New ToDo..."/>
                    <button id="newsubmit">+</button>
                </form>
              </aside>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
