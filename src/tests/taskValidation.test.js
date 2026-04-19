import { describe, expect, it } from "vitest";
import { validateTaskTitle } from "../helpers/taskValidation";
import { MESSAGES } from "../constants/messages";

describe("validateTaskTitle", () => {
  it("boş görev için hata dönmeli", () => {
    const result = validateTaskTitle("", []);
    expect(result).toBe(MESSAGES.EMPTY_TASK);
  });

  it("çok kısa görev için hata dönmeli", () => {
    const result = validateTaskTitle("ab", []);
    expect(result).toBe(MESSAGES.SHORT_TASK);
  });

  it("aynı görev tekrar eklenirse hata dönmeli", () => {
    const tasks = [{ id: 1, title: "React çalış" }];
    const result = validateTaskTitle("React çalış", tasks);
    expect(result).toBe(MESSAGES.DUPLICATE_TASK);
  });

  it("geçerli görev için boş string dönmeli", () => {
    const result = validateTaskTitle("Yeni görev", []);
    expect(result).toBe("");
  });
});