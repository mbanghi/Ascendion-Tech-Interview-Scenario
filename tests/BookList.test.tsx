import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import { BookList } from "../src/components/BookList";
import { initialData } from "../src/mock/mockBooks";

describe("BookList Component", () => {
  it("renders book titles from props", () => {
    render(<BookList books={initialData} />);

    expect(screen.getByText("The Lord of the Rings")).toBeInTheDocument();
    expect(screen.getByText("1984")).toBeInTheDocument();
  });

  it("opens modal when clicking Add Book", () => {
    render(<BookList books={initialData} />);

    fireEvent.click(screen.getByText("Add Book"));

    expect(screen.getByText("Add Book")).toBeInTheDocument();
  });

  it("adds a new book via modal form", () => {
    render(<BookList books={initialData} />);

    // open modal
    fireEvent.click(screen.getByText("Add Book"));

    // fill fields
    fireEvent.change(screen.getByPlaceholderText("Title"), {
      target: { value: "New Book" }
    });

    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Test description" }
    });

    // submit
    fireEvent.click(screen.getByText("Add"));

    // Check if new book is rendered
    expect(screen.getByText("New Book")).toBeInTheDocument();
  });
});
