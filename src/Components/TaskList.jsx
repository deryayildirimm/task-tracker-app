import TaskItem from "./TaskItem";

function TaskList({ tasks, handleDelete, handleEdit }) {
  if (tasks.length === 0) {
    return <p className="empty-state">Henüz görev eklenmedi.</p>;
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