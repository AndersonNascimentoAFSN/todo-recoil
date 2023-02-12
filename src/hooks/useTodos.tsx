import { useRecoilState, useRecoilValue } from "recoil";
import { todoListStatsState, todoListState } from "../store/todos";

export function useTodos() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const stats = useRecoilValue(todoListStatsState);

  return {
    todos,
    setTodos,
    stats,
  };
}
