import React, { useState } from "react";
import type { Book } from "../types/book";
import { BookItem } from "./BookItem";
import { AddBookModal } from "./AddBookModal";

export interface BookListProps {
  books: Book[];
  onBooksChange?: (books: Book[]) => void;
  placeholder?: string;
}

export const BookList: React.FC<BookListProps> = ({
  books: initialBooks,
  onBooksChange,
  placeholder
}) => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddBook = (newBook: Book) => {
    const updated = [...books, newBook];
    setBooks(updated);
    onBooksChange?.(updated);
  };

  return (
    <div>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          placeholder={placeholder}
        />
      ))}

      <button onClick={() => setModalOpen(true)}>➕ Add Book</button>

      <AddBookModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleAddBook}
      />
    </div>
  );
};

