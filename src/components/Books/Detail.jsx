import React from "react";
import { useLocation } from "react-router-dom";
import PaypalButton from "../Home/PaypalButton";

export const Detail = () => {
  const { state } = useLocation();
  const book = state?.book;
  console.log(book);

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
          <div className="relative h-96">
            <img
              src={book.image}
              alt=""
              layout="fill"
              className="transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
          <div className=" font-primary">
            <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
              {book.title}
            </h1>
            <p className="font-medium text-lg">{book.author}</p>
            <p className="font-medium text-lg">{book.publisher}</p>
            <p className="font-medium text-lg">{book.pageCount}</p>
            <div className="text-xl text-palette-primary font-medium py-4 px-1">
              <p className="font-medium text-lg">{book.price}</p>
            </div>
          </div>
          <div className="w-full">
            <PaypalButton valor={book.price} />
          </div>
        </div>
      </div>
    </div>
  );
};
