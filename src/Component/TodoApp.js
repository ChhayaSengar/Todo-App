import React, { useState } from 'react';
import './styles.css'; 

function TodoApp() {
  // State for managing the list of todo
  const [todo, setTodo] = useState([]);

  // State for managing the new todo input
  const [newTodo, setNewTodo] = useState('');

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      // Create a new array of todo with the new todo appended
      setTodo([...todo, newTodo]);
      // Clear the input field after adding a todo
      setNewTodo('');
    }
  };

  // Function to remove a todo
  const removeTodo = (index) => {
    // Create a copy of the todo array without the todo at the specified index
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    // Update the state with the modified todo array
    setTodo(updatedTodo);
  };

  return (
    <div className="todo-app">
      <h1>To-Do App</h1>
      <div className="todo-form">
      {/* Input field for entering a new task */}
        <input
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      {/* Button to add a new task */}
      <button className="add-button" onClick={addTodo}>Add Task</button>
      
      <ul className="todo-list">
       {/*  Map through the todo and display each one with a delete button  */}
        {todo.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* Button to delete a task */}
            <button className="delete-button" onClick={() => removeTodo(index)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
