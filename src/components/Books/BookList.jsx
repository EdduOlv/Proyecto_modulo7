import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookContext from "../../contexts/books/BookContext";
import PaypalButton from "../Home/PaypalButton";

export const BookList = () => {
  const navigate = useNavigate();
  const handleClick = (book) => {
    navigate(`/Detail/${book._id}`, { state: { book } });
  };
  const ctx = useContext(BookContext);
  const { books, createBook, getBooks, updateBook, deleteBook } = ctx;
  console.log(books);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {books.map((book) => (
        <div
          className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter"
          key={book._id}
        >
          <div className="h-96 border-b-2 border-palette-lighter relative">
            <img
              className="transform duration-500 ease-in-out hover:scale-110"
              src={book.image}
              alt={book.title}
            />
          </div>
          <div className="px-6 py-4">
            <div lassName="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
              {book.title}
            </div>
            <p className="text-lg text-gray-600 p-4 font-primary font-light">
              Precio: {book.price} USD
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button
              onClick={() => handleClick(book)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-7 px-4 rounded-full"
            >
              Ir al detalle
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
