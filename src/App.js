import React, {useState, useEffect} from "react";
import  './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';
import Darkmode from "darkmode-js/src";

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Darkmode toggle options
  const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  new Darkmode(). showWidget();
  const darkmode = new Darkmode(options);
  darkmode.showWidget();

  //Run Once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, [])
  //Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions and Events
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'incompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  // Save local todos
  const saveLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }
  
  return (
    <div className="App">
      <header>
        <h1>Today's focus</h1>
      </header>
      <Form inputText = {inputText} 
            todos = {todos} 
            setTodos = {setTodos} 
            setInputText = {setInputText}
            setStatus = {setStatus}/>
      <TodoList setTodos = {setTodos} 
                todos = {todos}
                filteredTodos = {filteredTodos}/>
    </div>
  );
}

export default App;
