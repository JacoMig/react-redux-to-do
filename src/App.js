import React from 'react';
import './App.css';
import {Todos} from './components/Todos'
import InputTodo from './components/InputTodo'
import {connect} from 'react-redux'

function App(props) {
  
  const inputRef = React.createRef()
 
  // console.log(props.todos)

  const {todos} = props;

  return (
    <div className="App">
      <header className="App-header">
        <h2>To Do List</h2>
      </header>
      <InputTodo />
      <Todos todos={todos} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, null)(App);
