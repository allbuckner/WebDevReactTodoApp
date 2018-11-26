import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
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
              <NewTodo />
              <Todo />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
