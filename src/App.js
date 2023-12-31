import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Todolist from './components/TodoList/Todolist';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, title: 'to buy a shampoo', status: false },
    { id: 2, title: 'to buy a T-shirt', status: false },
  ])

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      title: todo
    }
    setTodos([newTodo, ...todos])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const toggleTodo = (taskId) => {
    setTodos(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === taskId) {
          return { ...task, status: true };
        }
        return task;
      });
    });
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <Todolist todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
