import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("TodoApp", () => {
  test("заголовок TodoList", () => {
    render(<TodoApp />);

    const heading = screen.getByText(/TODO List/i);

    expect(heading).toBeInTheDocument();
  });

  test("можна вводити цифри та букви", () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText(/Введіть задачу/i);

    fireEvent.change(input, { target: { value: "Test123" } });
    expect(input.value).toBe("Test123");
  });

  test("отримання помилки при спробі додати без тексту", () => {
    render(<TodoApp />);

    const addButton = screen.getByText(/Додати задачу/i);
    const inputField = screen.getByPlaceholderText(/Введіть задачу/i);

    fireEvent.change(inputField, { target: { value: "" } });
    fireEvent.click(addButton);

    const tasks = screen.queryAllByRole("listitem");
    expect(tasks).toHaveLength(0);
  });

  test("нова задача з потрібним текстом", () => {
    render(<TodoApp />);
    const addButton = screen.getByText(/Додати задачу/i);
    const inputField = screen.getByPlaceholderText(/Введіть задачу/i);

    fireEvent.change(inputField, { target: { value: "Нова задача" } });
    fireEvent.click(addButton);

    const tasks = screen.getAllByRole("listitem");
    expect(tasks).toHaveLength(1);
    expect(tasks[0]).toHaveTextContent("Нова задача");
  });

  test("очищення від пробілів", () => {
    render(<TodoApp />);
    const addButton = screen.getByText(/Додати задачу/i);
    const inputField = screen.getByPlaceholderText(/Введіть задачу/i);

    fireEvent.change(inputField, {
      target: { value: "   Завдання з пробілами   " },
    });
    fireEvent.click(addButton);

    const tasks = screen.getAllByRole("listitem");
    expect(tasks[0]).toHaveTextContent("Завдання з пробілами");
  });
});
