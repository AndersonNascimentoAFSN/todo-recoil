import { useRecoilState } from "recoil";
import { useTodos } from "../../hooks/useTodos";
import { todoListState } from "../../store/todos";
import { TodoItem } from "../TodoItem";

export const TodoListTable = () => {
  const { todos, setTodos } = useTodos();

  const handleToggleTodo = (id: string) =>
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );

  const handleRemoveTodo = (id: string) =>
    setTodos((todosOld) => todosOld.filter((todo) => todo.id !== id));

  return (
      <div className="row">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Completed?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={handleRemoveTodo}
                toggleTodo={handleToggleTodo}
              />
            ))}
          </tbody>
        </table>
      </div>
  );
};
