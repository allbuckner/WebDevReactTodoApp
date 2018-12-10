import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';
var key2 = "dcb17b3baadbf0cec3d9435051b3d3877c8a42cb5bafe39c78c9a7b5ce9f1236";


class App extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:'', check: 1},
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.sortItemsAlpha = this.sortItemsAlpha.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }


  handleInput = e => {
    const itemText = e.target.value
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== ''){
      console.log(newItem)
      console.log(this.props.key);
    }
    var data = {
      text: newItem.text
    }
    console.log(JSON.stringify(data))
    var self = this;
    var createRequest = new XMLHttpRequest();

    createRequest.onreadystatechange = function(){
      console.log('readystate')
      if(this.readyState === 4 && this.status === 200){
        console.log('done')
        self.setState({
          items:[...self.state.items, JSON.parse(this.responseText)]
        })
    }
  }
    createRequest.open("POST", "https://api.kraigh.net/todos", true);
    createRequest.setRequestHeader("Content-type", "application/json");
    createRequest.setRequestHeader("x-api-key", key2);
    createRequest.send(JSON.stringify(data));
}
  deleteItem = key => {


    var self = this;
    var removeRequest = new XMLHttpRequest();

    removeRequest.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200){
        const filteredItems = self.state.items.filter(item => {
          return item.id !== key
        })
        self.setState({
          items: filteredItems,
        })
      }
      else if (this.readyState === 4){
        console.log(this.responseText)
      }
    }

    removeRequest.open("DELETE", "https://api.kraigh.net/todos/" + key, true);
    removeRequest.setRequestHeader("Content-type", "application/json");
    removeRequest.setRequestHeader("x-api-key", key2);
    removeRequest.send();
  }

  completeItem = e => {
    const complete = {check: 0}
    this.setState({
      complete,
    })
  }
  sortItemsAlpha()
  {
    console.log("alpha");
    const self = this;
    let vari = this.state.items;
    vari.sort(function (a,b) {
      return a.text.localeCompare(b.text);
    });
    self.setState({
      items:vari
    })
  }

  componentDidMount()
  {
    const self = this;
    var listRequest = new XMLHttpRequest();
    listRequest.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
        self.setState({items: JSON.parse(this.responseText)});
      }
    }
    listRequest.open("GET", "https://api.kraigh.net/todos", true);
    listRequest.setRequestHeader("x-api-key", key2);
    listRequest.send();

  }

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
            <button id="sort" onClick={this.sortItemsAlpha}> Sort Alphabetically </button>
            <section id="todos">
              <NewTodo
                addItem={this.addItem}
                inputElement={this.inputElement}
                handleInput={this.handleInput}
                currentItem={this.state.currentItem}
              />
              <Todo entries={this.state.items} deleteItem={this.deleteItem}/>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
