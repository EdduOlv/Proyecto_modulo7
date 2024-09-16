import React from "react";
import banner from "../../assets/banner.jpg"
import { BookList } from "../Books/BookList";

export const Home = () => {
  return (
    <>
      <div className="container mx-auto justify-center items-center">
        <h1 className="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">ECOMERCE EBOOKS</h1>
        <img className="w-full h-64 object-cover mb-10" src={banner} alt="" />
      </div>
      <div>
        <div>
          <div
            className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
          >
            <BookList />
          </div>
        </div>
      </div>
    </>
  );
};
