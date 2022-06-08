import React from "react";

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo, importantTodo } = props;
  return (
    <div
      className={todo.completed ? "todo-row complete" : "todo-row"}
      style={todo.important ? { background: "orange" } : {}}
    >
      {todo.text}
      <div className="iconsContainer">
        <button
          onClick={() => importantTodo(todo.id)}
          className="important-btn"
        >
          !
        </button>
        <RiCloseCircleLine
          style={{ marginRight: 5 }}
          onClick={() => removeTodo(todo.id)}
        />
        <BiCheckCircle onClick={() => completeTodo(todo.id)} />
      </div>
    </div>
  );
}
