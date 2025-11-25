import React, { useState } from "react";
import type { Book } from "../types/book";

export interface AddBookModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (book: Book) => void;
}

export const AddBookModal: React.FC<AddBookModalProps> = ({
  open,
  onClose,
  onAdd
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (!title.trim()) return;

    onAdd({
      id: crypto.randomUUID(),
      title,
      description: description.trim() || undefined,
      coverUrl: coverUrl.trim() || undefined
    });

    setTitle("");
    setDescription("");
    setCoverUrl("");

    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onMouseDown={onClose}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        style={{ background: "#fff", padding: "1.5rem", borderRadius: 8 }}
      >
        <h2>Add Book</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />

        <input
          placeholder="Cover URL"
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
          style={{ width: "100%", marginBottom: 20 }}
        />

        <button onClick={handleSubmit}>Add</button>
        <button style={{ marginLeft: 8 }} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

