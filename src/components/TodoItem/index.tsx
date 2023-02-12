import { ITodo } from "../../@types/todo";

type TodoItemProps = {
  todo: ITodo;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export function TodoItem({ todo, toggleTodo, removeTodo }: TodoItemProps) {
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.completed ? "✅" : ""}</td>
      <td>
        <button
          className="btn btn-sm btn-info"
          onClick={() => toggleTodo(todo.id!)}
        >
          Toggle
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => removeTodo(todo.id!)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
