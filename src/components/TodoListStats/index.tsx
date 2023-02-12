import { useTodos } from "../../hooks/useTodos";

export function TodoListStats() {
  const { stats } = useTodos();

  return (
    <div className="alert alert-primary">
      <div className="d-inline col-4 fs-5">
        Total items: &nbsp;
        <span className="badge badge-info fs-5">{stats.totalNum}</span>
      </div>
      <div className="d-inline col-4 fs-5">
        Finished items: &nbsp;
        <span className="badge badge-info fs-5">{stats.totalCompletedNum}</span>
      </div>
      <div className="d-inline col-4 fs-5">
        Unfinished items: &nbsp;
        <span className="badge badge-info fs-5">
          {stats.totalUncompletedNum}
        </span>
      </div>
    </div>
  );
}
