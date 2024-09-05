import React from "react";
import { useLocation } from "react-router-dom";

export const Detail = () => {
  const { state } = useLocation();
  const book = state?.book;

  return (
    <div>
      <h3> TITULO :{book.title}</h3>
      <p> AUTOR: {book.author}</p>
      <p> EDITORIAL: {book.publisher}</p>
      <p> RESUMEN: {book.summary}</p>
      <p> PAGINAS: {book.pageCount}</p>
      <p> PRECIO : {book.price}</p>
    </div>
  );
};
