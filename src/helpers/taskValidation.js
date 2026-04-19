import { MESSAGES } from "../constants/messages";

export function validateTaskTitle(title, tasks, editId = null) {
  const trimmedTitle = title.trim();

  if (!trimmedTitle) {
    return MESSAGES.EMPTY_TASK;
  }

  if (trimmedTitle.length < 3) {
    return MESSAGES.SHORT_TASK;
  }

  if (trimmedTitle.length > 50) {
    return MESSAGES.LONG_TASK;
  }

  const isDuplicate = tasks.some(
    (task) =>
      task.title.toLowerCase() === trimmedTitle.toLowerCase() &&
      task.id !== editId
  );

  if (isDuplicate) {
    return MESSAGES.DUPLICATE_TASK;
  }

  return "";
}