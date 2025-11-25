import React, { useState } from "react";
import type { Book } from "../types/book";

export interface BookItemProps {
  book: Book;
  placeholder?: string;
  style?: React.CSSProperties;
}

export const BookItem: React.FC<BookItemProps> = ({
  book,
  placeholder = "https://via.placeholder.com/120x160?text=No+Cover",
  style
}) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div style={{ 
      display: "flex", 
      padding: "1rem",
      margin: "1rem",
      gap: "2rem",border: 
      "1px solid #ccc",
      borderRadius: 8, 
      ...style }}>
      <img
        src={book.coverUrl || placeholder}
        alt={book.title}
        style={{ width: 120, height: 160, objectFit: "cover" }}
      />

      <div>
        <h3>{book.title}</h3>

        <button onClick={() => setShowDescription((s) => !s)}>
          {showDescription ? "Hide Description" : "Show Description"}
        </button>

        {showDescription && <p>{book.description || "No description provided"}</p>}
      </div>
    </div>
  );
};
