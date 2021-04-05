function randomId() {
  return Math.random().toString(36).slice(2, 10).toUpperCase();
}

export const addBook = (book) => ({
  type: "ADD_BOOK",
  payload: { id: randomId(), ...book },
});

export const removeBook = (id) => ({
  type: "REMOVE_BOOK",
  payload: id,
});

export const editBook = (id, book) => ({
  type: "EDIT_BOOK",
  payload: { id, book },
});

export default {
  addBook,
  removeBook,
  editBook,
};
