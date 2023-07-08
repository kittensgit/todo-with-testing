import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Todolist from './components/TodoList/Todolist';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, title: 'to buy a shampoo' },
    { id: 2, title: 'to buy a T-shirt' },
  ])

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      title: todo
    }
    setTodos([newTodo, ...todos])
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo}/>
      <Todolist todos={todos} />
    </div>
  );
}

export default App;
