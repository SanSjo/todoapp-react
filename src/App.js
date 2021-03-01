import React, {useState} from 'react';
import './App.css';
import {Todo} from './components/Todo'
import {TodoForm} from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([]);


  const addTodo = (text) => {
    const newTodo = [...todos, {text}];
    setTodos(newTodo);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = (index) =>{
    const deleteTodos = [...todos];
    deleteTodos.splice(index, 1)
    setTodos(deleteTodos);
  }


  return (
    <div className="App">
      <header className="App-header">
      <div>
        <TodoForm addTodo={addTodo}/>
      </div>
      <div>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))}
      </div>
      </header>
    </div>
  );
}

export default App;
