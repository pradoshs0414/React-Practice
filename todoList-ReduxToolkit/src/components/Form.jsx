import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addButtonHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addButtonHandler} className="flex gap-6">
      <input
        type="text"
        placeholder="Write your task here"
        className=" border border-black/10  rounded-lg px-2 text-2xl text-center outline-none duration-150 bg-white/20 w-[600px] shadow-lg "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="text-l t-2 b-2 p-2 w-1/4 shadow-lg outline-none rounded-lg bg-orange-400 ">
        Add Task
      </button>
    </form>
  );
};

export default Form;
