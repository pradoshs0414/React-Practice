import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo:[
        {
            id:1,
            todoMess:"What do you want?",
            completed:false
        }
    ],
   addTodo: (todo)=>{},
   editTodo:(id,todo)=>{},
   deleteTodo:(id)=>{},
   toggleComplete:(id)=>{}
}
)

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider