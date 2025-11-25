import React from "react";
import { BookList } from  "./components/BookList";
import { initialData } from "./mock/mockBooks";

export default function App() {
  return (
    <div className='App'>
      <BookList books={initialData} />
    </div>
  );
}
