import { React, useState } from "react";
import Form from "./components/Form";
import TodoCard from "./components/TodoCard";

function App() {
  return (
    <>
      <div className="w-full h-64 bg-[#023047] flex flex-col items-center">
        <div className="mb-4">
          <h1 className="text-white text-6xl m-4">Today's Task List</h1>
        </div>
        <div className="mb-4 p-10">
          <Form />
        </div>
      </div>
      <div className="flex items-center flex-col m-12 flex-wrap gap-y-3">
          <TodoCard/>
        </div>
    </>
  );
}

export default App;
