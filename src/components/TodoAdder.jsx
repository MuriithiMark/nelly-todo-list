import { useState } from "react";
import "./TodoAdder.css";

import React from "react";

const TodoAdder = ({onAdd}) => {
  const [inputValue, setInputValue] = useState("");
  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function handleClick(event) {
    onAdd(inputValue);
    setInputValue("")
  }
  return (
    <div className="todo-adder">
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default TodoAdder;
