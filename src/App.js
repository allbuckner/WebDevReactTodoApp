import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo'

class App extends Component {
  render() {
    return (
        <section id="todos">
        <NewTodo />
        <Todo />
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
    );
  }
}

export default App;
