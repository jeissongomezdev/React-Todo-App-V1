import { useState } from "react";
import "./App.scss";

function App() {
  //Tarea que agregamos
  const [todo, setTodo] = useState("");

  //Lista de tareas
  const [todos, setTodos] = useState([]);

  //Cancelamos que el formulario recargue la pagina
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    let updateTodos = [
      ...todos,
      {
        title: todo,
        completed: false,
      },
    ];
    setTodos(updateTodos);
  };

  return (
    <>
      <div className="todo">
        <h1 className="todo__title">Mis Tareas</h1>
        <form className="todo__input-container" onSubmit={handleSubmit}>
          <input
            className="todo__input"
            type="text"
            value={todo}
            name="text"
            placeholder="Agrega una nueva tarea aquí..."
            autoComplete="off"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="todo__add-btn" onClick={addTodo}>
            Agregar
          </button>
        </form>
        <div className="todolist-container">
          <div className="todos-container">
            <div>
              {todos.map((todo) => (
                <div>{todo}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
