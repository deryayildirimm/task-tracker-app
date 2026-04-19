import TaskItem from "./TaskItem";
import { UI_TEXT } from "../constants/uiText";

function TaskList({ tasks, handleDelete, handleEdit }) {
  if (tasks.length === 0) {
    return <p className="empty-state">{UI_TEXT.EMPTY_STATE}</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;