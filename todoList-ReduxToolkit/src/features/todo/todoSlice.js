import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: 1,
      text: "Learn Redux Toolkit",
    },
  ],
};

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const newTodo = {
                id:nanoid(),
                text:action.payload.text
            }
            state.todoList.push(newTodo)
        },
        deleteTodo:(state, action)=>{
            state.todoList=state.todoList.filter((todo)=>todo.id !== action.payload)
        },
        editTodo:(state, action)=>{
            const {id,text} = action.payload
            state.todoList = state.todoList.map((todo)=>(todo.id === id ? {...todo, text}:todo))
        }
    }
})

export const {addTodo,deleteTodo,editTodo}= todoSlice.actions
export default todoSlice.reducer