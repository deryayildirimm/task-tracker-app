import { describe, expect, it } from "vitest";
import {
  addTask,
  createTask,
  deleteTask,
  updateTask,
} from "../helpers/taskHelpers";

describe("taskHelpers", () => {
  it("createTask yeni görev oluşturmalı", () => {
    const task = createTask("React çalış");

    expect(task.title).toBe("React çalış");
    expect(task.id).toBeTypeOf("number");
  });

  it("addTask listeye yeni görev eklemeli", () => {
    const tasks = [{ id: 1, title: "İlk görev" }];
    const newTask = { id: 2, title: "İkinci görev" };

    const result = addTask(tasks, newTask);

    expect(result).toHaveLength(2);
    expect(result[1].title).toBe("İkinci görev");
  });

  it("deleteTask görevi listeden silmeli", () => {
    const tasks = [
      { id: 1, title: "Görev 1" },
      { id: 2, title: "Görev 2" },
    ];

    const result = deleteTask(tasks, 1);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  it("updateTask görevi güncellemeli", () => {
    const tasks = [
      { id: 1, title: "Eski görev" },
      { id: 2, title: "Görev 2" },
    ];

    const result = updateTask(tasks, 1, "Yeni görev");

    expect(result[0].title).toBe("Yeni görev");
  });
});