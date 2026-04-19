function TaskItem({ task, handleDelete, handleEdit }) {
  return (
    <li className="list-group-item task-item d-flex justify-content-between align-items-center flex-wrap gap-3">
      <span className="task-title">{task.title}</span>

      <div className="d-flex gap-2">
        <button
          className="btn btn-warning btn-sm"
          onClick={() => handleEdit(task)}
        >
          Düzenle
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(task.id)}
        >
          Sil
        </button>
      </div>
    </li>
  );
}

export default TaskItem;