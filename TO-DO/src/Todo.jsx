import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import  './App.css';

function Todo() {
    const [todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone: false}]);

    const [task, setTask] = useState("");

    

    let addTask = () => {
        setTodos((prevtodos) => {
            return [...prevtodos, {task: task, id: uuidv4(), isDone: false}];
        });
        setTask("");
    }
    let updateInput = (e) => {
        setTask(e.target.value);
    }

    let deleteTask = (id) => {
        setTodos((prevtodos) => todos.filter((prevtodos) => prevtodos.id != id));
    }

    let markAsDone = id => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };




  return (
    <div>
        <input type="text" placeholder='add your task' onChange={updateInput} value={task}/>
        <br /> <br />
        <button onClick={addTask}>Add Task</button>
        <h2>Task For To-Do</h2>
        <ul>
            
            {todos.map((todo) =>  (
                <li key={todo.id} style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}><span>{todo.task}</span>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => deleteTask(todo.id)}>Delete</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                <br /><br />
                </li>
                
            ))}
            
        </ul>
    </div>
  )
}

export default Todo
