import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookContext from "../../contexts/books/BookContext";

export const BookList = () => {
  const navigate = useNavigate();
  const handleClick = (book) => {
    navigate(`/Detail/${book._id}`, { state: { book } });
  };
  const ctx = useContext(BookContext);
  const { books, createBook, getBooks, updateBook, deleteBook } = ctx;
 

  useEffect(() => {
    getBooks();
  }, []);
  console.log(books);
  
  return (
    <>
      <div>
        <h3>Lista de libros</h3>
      </div>
      <div>
        {books.map((book) => (
          <div key={book._id}>
            <h3> TITULO : {book.title}</h3>
            <p> PRECIO: {book.price}</p>
            <p>ir al detalle de {book.title}</p>
            <button onClick={() => handleClick(book)}>
              ir al detalle
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
