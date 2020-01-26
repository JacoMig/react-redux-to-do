import React from 'react';
import './App.css';
import Todos from './components/Todos'
import InputTodo from './components/InputTodo'
import {connect} from 'react-redux'
import FilterLinks from './components/filerlinks'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>To Do List</h2>
      </header>
      <InputTodo />
      <Todos />
      <FilterLinks />
    </div>
  );
}


export default App;
