import { TodoItemCreator } from "../TodoItemCreator";
import { TodoListStats } from "../TodoListStats";
import { TodoListTable } from "../TodoListTable";

export const Todo = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "2.5rem auto" }}>
      <h1>Todos</h1>

      <TodoListStats />

      <TodoItemCreator />

      <TodoListTable />
    </div>
  );
};
