export function createTask(title) {
  return {
    id: Date.now(),
    title: title.trim(),
  };
}

export function addTask(tasks, newTask) {
  return [...tasks, newTask];
}

export function deleteTask(tasks, id) {
  return tasks.filter((task) => task.id !== id);
}

export function updateTask(tasks, editId, newTitle) {
  return tasks.map((task) =>
    task.id === editId ? { ...task, title: newTitle.trim() } : task
  );
}