import { atom, selector } from "recoil";
import { ITodo } from "../../@types/todo";

export const todoListState = atom<ITodo[]>({
  key: "TodoList",
  default: [],
});

export const todoListStatsState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const totoList = get(todoListState);
    const totalNum = totoList.length;
    const totalCompletedNum = totoList.filter((todo) => todo.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});
