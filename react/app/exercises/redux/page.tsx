"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  addTodo,
  removeTodo,
} from "@/redux/features/todos/actions";
import { TodoState } from "@/redux/store/types";
import { RootState } from "@/redux/store/store";

const Home: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleFetchTodos = () => {
    dispatch(fetchTodos());
  };

  const handleRemoveTodo = (index: number) => {
    dispatch(removeTodo(index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Todo App</h1>

      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {/* Input Section */}
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Add Todo
          </button>
          <button
            onClick={handleFetchTodos}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Fetch Todos
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
            >
              <span>{todo}</span>
              <button
                onClick={() => handleRemoveTodo(index)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
