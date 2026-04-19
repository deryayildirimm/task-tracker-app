import { useEffect, useState } from "react";
import { validateTaskTitle } from "../helpers/taskValidation";
import {
  addTask,
  createTask,
  deleteTask,
  updateTask,
} from "../helpers/taskHelpers";
import { UI_TEXT } from "../constants/uiText";

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  // LocalStorage sync
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateTaskTitle(inputValue, tasks, editId);

    if (validationError) {
      setError(validationError);
      return;
    }

    // Güncelleme
    if (editId !== null) {
      const updatedTasks = updateTask(tasks, editId, inputValue);
      setTasks(updatedTasks);
      setEditId(null);
      setInputValue("");
      setError("");
      return;
    }

    // Yeni ekleme
    const newTask = createTask(inputValue);
    const updatedTasks = addTask(tasks, newTask);

    setTasks(updatedTasks);
    setInputValue("");
    setError("");
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(UI_TEXT.DELETE_CONFIRM);

    if (!confirmDelete) return;

    const updatedTasks = deleteTask(tasks, id);
    setTasks(updatedTasks);

    if (editId === id) {
      setEditId(null);
      setInputValue("");
    }

    setError("");
  };

  const handleEdit = (task) => {
    setInputValue(task.title);
    setEditId(task.id);
    setError("");
  };

  return {
    tasks,
    inputValue,
    setInputValue,
    editId,
    error,
    handleSubmit,
    handleDelete,
    handleEdit,
  };
}