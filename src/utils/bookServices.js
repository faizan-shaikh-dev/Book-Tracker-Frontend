import API from "../api/axios";

//Create Book
export const createBook = (payload) => {
  return API.post("/book/create", payload);
};

//Get all Book
export const getAllBook = () => {
  return API.get("/book/all");
};

//Update Book
export const updateBook = (id,payload) => {
  return API.put(`/book/edit/${id}`, payload);
};

//Delete Book
export const deleteBook = (id) => {
  return API.delete(`/book/delete/${id}`);
};
