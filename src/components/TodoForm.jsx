import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo__form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo__input"
        placeholder="Add a todo"
      />
      <button type="submit" className="todo__add-btn">
        Add Todo
      </button>
    </form>
  );
};
