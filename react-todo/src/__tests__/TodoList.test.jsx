import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

test("adds a new todo", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText("Add a new todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(button);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

  test("toggles a todo", () => {
  render(<TodoList />);

  const todo = screen.getByText("Learn React");

  // Initially not completed
  expect(todo).not.toHaveClass("completed");

  // Toggle
  fireEvent.click(todo);
  expect(todo).toHaveClass("completed");
});
test("deletes a todo", () => {
  render(<TodoList />);

  const deleteButton = screen.getByTestId("delete-1"); // depends on how you implement delete
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});

});