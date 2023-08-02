import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaEdit } from "react-icons/fa";
import {  getTodo } from "../Redux/action";
export const TodoItem = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    dispatch(getTodo);
  }, []);
  const { loading, error, todo } = data;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something wrong please try again...</h1>;
  }

  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Todo
            </th>
            <th scope="col" class="px-6 py-3">
              Task
            </th>
            <th scope="col" class="px-6 py-3">
              Edit
            </th>
            <th scope="col" class="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {todo.length > 0 &&
            todo.map((ele) => {
              return (
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={ele.id}
                >
                  <td>{ele.title}</td>
                  <td class="px-6 py-4">
                    {ele.status ? "Completed" : "Pending"}
                  </td>
                  <td class="px-6 py-4 ">
                    <FaEdit />
                  </td>
                  <td class="px-6 py-4">
                    <FaTrash />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
