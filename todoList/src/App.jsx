import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import {TodoForm, TodoItem} from './components'

function App() {
  const [todo, setTodo] = useState([])
  const addTodo = (todoList)=>{
    setTodo((prev)=>[{id:Date.now(),...todoList},...prev])
  }

  const editTodo =(id,todoList)=>{
    setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? todoList :prevTodo)))
  }

  const deleteTodo = (id)=>{
    setTodo(prev=> prev.filter((val) => val.id !== id))
  }

  const toggleComplete = (id)=>{
    setTodo((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"))

    if (todos && todos.length > 0) {
      setTodo(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todo',JSON.stringify(todo))
  }, [todo])
  
  
  return (
    <TodoProvider value={{todo, addTodo, editTodo, deleteTodo,toggleComplete}}>
    <div className="bg-[#E3FDFD] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-[#D0A2F7]">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todo.map((todo)=>(
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    </TodoProvider>
  );
}

export default App;
