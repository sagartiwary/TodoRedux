import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/action";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleADD = (e) => {
    e.preventDefault();
    let data = {
      title,
      status: false,
    };
    dispatch(addTodo(data));
    setTitle("");
  };
  return (
    <>
      <h1 className="font-semibold font-serif text-2xl mt-6 mb-5 ">My Todos</h1>
      <div className="max-w-xl   mb-5 mx-auto px-4 py-5">
        <form onSubmit={handleADD}>
          <input
            type="text"
            className="border border-gray-400 rounded bg-white text-gray-500 px-3 py-2 mr-3 focus:bg-white hover:bg-white text-md font-sans"
            placeholder=" Todos"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            className="border border-gray-300 px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-800 transition duration-150 ease-in"
          >
            ADD TODO
          </button>
        </form>
      </div>
      <TodoItem />
    </>
  );
};
