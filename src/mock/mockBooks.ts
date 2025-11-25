import type { Book } from "../entities/book";

export const initialData: Book[] = [
  {
    id: "1",
    title: "The Lord of the Rings",
    description: "An epic high fantasy novel by J.R.R. Tolkien.",
    coverUrl:
      "https://covers.openlibrary.org/b/id/15131000-L.jpg"
  },
  {
    id: "2",
    title: "My own book with no description",
    description: "",
    coverUrl:
      "https://covers.openlibrary.org/b/id/8231856-L.jpg"
  },
  {
    id: "3",
    title: "Book Without Cover",
    description: "This one has no cover, so the placeholder appears."
  }
];
