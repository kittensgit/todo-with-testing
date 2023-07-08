import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Todolist from './components/TodoList/Todolist';

function App() {

  const todos = [
    { id: 1, title: 'to buy a shampoo' },
    { id: 2, title: 'to buy a T-shirt' },
  ]

  return (
    <div className="App">
      <AddTodo />
      <Todolist todos={todos} />
    </div>
  );
}

export default App;
