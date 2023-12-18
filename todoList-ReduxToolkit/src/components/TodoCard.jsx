import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../features/todo/todoSlice";

function TodoCard() {
  const todo = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  return (
  todo.map((todol) => (
    <div
      className="flex gap-3 bg-white w-[500px] h-[80px] p-4 items-center "
      key={todol.id}
    >
      <div className="w-[25px] h-[25px]" onClick={() => setChecked(!checked)}>
        {checked ? (
          <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="25px"
            height="25px"
            viewBox="0 0 40 40"
            xml:space="preserve"
          >
            <g>
              <path
                d="M20,0C8.974,0,0,8.973,0,20c0,11.027,8.974,20,20,20c11.029,0,20-8.973,20-20C40,8.973,31.029,0,20,0z M28.818,17.875
  l-8.562,8.564c-0.596,0.595-1.377,0.893-2.158,0.893c-0.779,0-1.561-0.298-2.156-0.893l-4.758-4.758
  c-1.191-1.191-1.191-3.124,0-4.313c1.191-1.192,3.121-1.192,4.314,0l2.6,2.6l6.408-6.407c1.188-1.189,3.123-1.189,4.312,0
  C30.01,14.752,30.01,16.684,28.818,17.875z"
              />
            </g>
          </svg>
        ) : (
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
              fill="#292D32"
            />
          </svg>
        )}{" "}
      </div>
      <input
        type="text"
        value={todol.text}
        className={`w-[800px] p-2 rounded-lg text-xl outline-none ${
          checked ? "line-through" : " "
        } ${isEditable ? "bg-gray-100" : ""}`}
        
        onChange={(e) => {console.log(e); dispatch(editTodo({id:todol.id, text:e.target.value}))}}
        readOnly={!isEditable}
      />
      <button className={checked?'hidden':""} onClick={() => setIsEditable(!isEditable)}>
        {isEditable ? (
          <svg
            width="25px"
            height="25px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            stroke-width="0.00024000000000000003"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
                fill="#0cc0ed"
              ></path>{" "}
            </g>
          </svg>
        ) : (
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#0da3e3"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                stroke="#000000"
                stroke-width="1.488"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                stroke="#000000"
                stroke-width="1.488"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        )}
      </button>
      <button onClick={() => dispatch(deleteTodo(todol.id))}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
          </g>
        </svg>
      </button>
    </div>
  )));
}


export default TodoCard;
