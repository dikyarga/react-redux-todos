import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dumb todo list, but with React :D</h2>
        </div>
        <p className="App-intro">
          Tulis, kerjakan, selesai.
          <AddTodo/>
          <br/>
          <TodoList/>
        </p>
      </div>
    );
  }
}

export default App;
