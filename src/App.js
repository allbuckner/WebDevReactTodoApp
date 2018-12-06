import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';
var key = "62d17883c4e63242408ac97d73dd14774342872db130e2f4f243127d85ca701f";


class App extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:'', check: 1},
    }
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
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: {text: '', key: '', check: 1},
      })
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

    createRequest.open("POST", "https://api.kraigh.net/todos", true);
    createRequest.setRequestHeader("Content-type", "application/json");
    createRequest.setRequestHeader("x-api-key", key);
    createRequest.send(JSON.stringify(data));
  }
}
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  completeItem = e => {
    const complete = {check: 0}
    this.setState({
      complete,
    })
  }
  sortItems()
  {
    this.state.sort(function (a,b) {
      return a.text.localeCompare(b.text);
    })
  }

  componentDidMount()
  {
    const self = this;
    var listRequest = new XMLHttpRequest();
    listRequest.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
        var test = JSON.parse(listRequest.responseText)
        console.log(test)
        //self.setState({items: JSON.parse(this.responseText)});
      }
    }
    listRequest.open("GET", "https://api.kraigh.net/todos", true);
    listRequest.setRequestHeader("x-api-key", key);
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
            <button id="sort" onClick={() =>
            this.props.check}>Sort by Time</button>
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
