import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  // Examples of helper functions in testing :-
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  it("Should load heading inside contact component", () => {
    // "it" - another name for test. when you read it as a whole sentence it makes sense. Just another naming convention

    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox"); // when you need multiple items to be tested by one case, we use getAllByRole or else it throws error

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
