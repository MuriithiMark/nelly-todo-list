import React from "react";
import Todo from "./Todo";
import { useState } from "react";

const TodoList = ({todos, onDelete}) => {

  return <div>
    {
        todos.map((todoData) => {
            return <Todo data={todoData} onDelete={onDelete} />
        })
    }
  </div>;
};

export default TodoList;
