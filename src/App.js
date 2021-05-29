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

  // run once when the app starts
  useEffect(() => {
    getLocalStorageTodos()
  }, [])

  useEffect(() => {
    filterHandler();
    saveToLocalStorage();
  }, [todos, status])

  // filter todos
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

  // save to localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  // get todos from localStorage
  const getLocalStorageTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodos)
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
