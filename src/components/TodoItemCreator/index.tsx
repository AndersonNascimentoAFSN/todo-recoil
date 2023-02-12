import { useState } from "react";
import { v4 } from "uuid";

import { useTodos } from "../../hooks/useTodos";

export function TodoItemCreator() {
  const [title, setTitle] = useState("");
  const { setTodos } = useTodos();

  function handleAddTodo() {
    setTodos((todosState) => [
      { id: v4(), title: title, completed: false },
      ...todosState,
    ]);
    setTitle("");
  }

  return (
    <div>
      <div className="form-group mb-3">
        <input
          className="form-control"
          type="text"
          value={title}
          placeholder="Todo title..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button className="btn btn-primary mb-4" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
    </div>
  );
}
