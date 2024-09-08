import { useReducer } from "react";
import BookContext from "./BookContext";
import BookReducer from "./BookReducer";
import axiosClient from "../../config/axios";

const BookState = (props) => {
  const initialState = {
    books: [ 
    
    ]
  };

  const [globalState, dispatch] = useReducer(BookReducer, initialState);

  const createBook = async (dataForm) => {
    const form = {
      title: dataForm.title,
      author: dataForm.author,
      publisher: dataForm.publisher,
      summary: dataForm.summary,
      pageCount: dataForm.pageCount,
      price: dataForm.price,
    };
    try {
      await axiosClient.post(`/book/create`, form);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const getBooks = async () => {
    try {
      const res = await axiosClient.get(`/book/readall`);
      dispatch({
        type: "SET-BOOKS",
        payload: res.data.books,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateBook = async (id, dataForm) => {
    const form = {
      id,
      title: dataForm.title,
      author: dataForm.author,
      publisher: dataForm.publisher,
      summary: dataForm.summary,
      pageCount: dataForm.pageCount,
      price: dataForm.price,
    };
    try {
      await axiosClient.put(`/book/update`, form);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    const data = { id };
    try {
      await axiosClient.delete(`/book/delete`, { data });      
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BookContext.Provider
      value={{
        books: globalState.books,
        createBook,
        getBooks,
        updateBook,
        deleteBook,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
