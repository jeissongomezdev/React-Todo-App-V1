import React, { useState } from "react";

export default function TodoForm(props) {
  //Tarea que agregamos
  const [todo, setTodo] = useState("");

  //Cancelamos que el formulario recargue la pagina
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo__input-container">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="todo__input"
        placeholder="Agrega una nueva tarea aquí..."
        autoComplete="off"
      />
      <button type="submit" className="todo__add-btn" onClick={addTodo}>
        Agregar
      </button>
    </form>
  );
}
