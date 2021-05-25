import React, { useState, useEffect } from "react";
import './App.css';

//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status])


  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setfilteredTodos(todos)
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Adrian's ToDo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
