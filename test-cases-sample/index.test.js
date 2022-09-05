import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// types of test-cases

// define a test suite
describe("test app.js", () => {
  // runs before each test-case
  beforeEach(() => {
    render(<App />);
  });

  test("should add number", () => {
    expect(1 + 1).toBe(2);
  });
});

//1. simple
test("should add number", () => {
  expect(1 + 1).toBe(2);
});

//2. check if a particular control is available in the file or not
test("check button is present", () => {
  render(<App />);
  const buttonELement = screen.getByText(/lear react/i); // case insensitive
  expect(buttonELement).toBeInTheDocument();
});

//3. check if a event is performing properly or not
test("check button is clicked", () => {
  render(<App />);
  const buttonELement = screen.getByText(/lear react/i); // case insensitive
  userEvent.click(buttonELement);
  const headingDisplayedOnButtonCLicked =
    screen.getByText(/button is clicked/i); // case insensitive
  expect(headingDisplayedOnButtonCLicked).toBeInTheDocument();
});

//4. check for a particular HTML control
test("check textarea has value", () => {
  render(<textarea />);
  const buttonELement = screen.getByText(/lear react/i); // case insensitive
  userEvent.type(screen.getByRole("textbox"), "Hello World");
  expect(screen.getByRole("textbox")).toHaveValue("Hello World");
});

//5. check if api is called or not
const fetchMethod = jest.spyOn(App, "name of method in quotes only");
test("check if api serivce is called", () => {
  render(<App />);
  fetchMethod.mockImplementation(jest.fn); // mocking the functionality of the same method
  expect(fetchMethod).toHaveBeenCalled();
});
