import { useContext, useState } from "react";
import {
  createBook,
  deleteBook,
  getAllBook,
  updateBook,
} from "../utils/bookServices";

const BookContext = useContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //fetch Books funcrion
  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await getAllBook();
      console.log(res.data);
      setBooks(res.data);
    } catch (error) {
      setError(error?.response?.data?.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  //Add New Book
  const addBook = async () => {
    try {
      setLoading(true);
      setError(null);
      await createBook(payload);
      fetchBooks();
    } catch (error) {
      setError(error?.response?.data?.message || "Failed to add book");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //Update Book
  const editBook = async (id, payload) => {
    try {
      setLoading(true);
      setError(null);

      await updateBook(id, payload);
      fetchBooks();
    } catch (error) {
      setError(error?.response?.data?.message || "Failed to update book");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //Delete Book
  const clearBook = async (id) => {
    try {
      setLoading(true);
      setError(null);

      await deleteBook(id);
      fetchBooks();
    } catch (error) {
      setError(error?.response?.data?.message);
      throw error;
    } finally {
      setLoading(false);
      setError(null);
    }
  };

  return (
    <BookContext.Provider
      value={{
        books,
        loading,
        error,
        fetchBooks,
        addBook,
        editBook,
        clearBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBook = ()=> useContext(BookContext);
