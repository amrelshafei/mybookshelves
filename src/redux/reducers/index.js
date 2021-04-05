import { combineReducers } from "redux";
import booksReducer from "./books";
import modalReducer from "./modal";

export default combineReducers({
  books: booksReducer,
  modal: modalReducer,
});
