import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import booksActions from "../redux/actions/books";
import modalActions from "../redux/actions/modal";
import { minifyParagraph } from "../util";
import "./classes/bookshelf.css";

/**
 * A React function component that renders a list of book items.
 * @param {{ books: any[] }} props The component's props that contain a list of
 * books with specific properties.
 * @param {*} ref A forwarded ref object thats associated with the first element
 * in this component.
 */
function BookShelf(props, ref) {
  // Destructuring component props
  const { books = [] } = props;

  // retrieving the redux store's dispatch function
  const dispatch = useDispatch();

  /**
   * Handles the onClick event for when a book title is clicked.
   * @param {number} id The id of the book.
   * @returns {(event: React.MouseEvent) => void} the edit onClick handler.
   */
  const handleEdit = (id) => (event) => {
    // Processing the data for feeding the modal form
    const book = books.find((book) => book.id === id);
    const value = {
      title: book.title,
      category: book.category,
      description: book.description,
      price: book.price,
      media: book.media,
    };
    // Dispatch redux state actions
    dispatch(modalActions.setModalMode("edit"));
    dispatch(modalActions.setModalFormId(id));
    dispatch(modalActions.editModalFormValue(value));
    dispatch(modalActions.showModal());
  };

  /**
   * Handles the onClick event for when the remove book button is clicked.
   * @param {number} id The id of the book.
   * @returns {(event: React.MouseEvent) => void} the remove onClick handler.
   */
  const handleRemove = (id) => (event) => {
    // Dispatch redux state actions
    dispatch(booksActions.removeBook(id));
  };

  return (
    <ul className="bookshelf" ref={ref}>
      {books.map(
        ({ id, title, category, description, price, media }, index) => (
          <li className={`clipped${index % 4}`} key={id}>
            <div className="content">
              <p className="price">{`$${price}`}</p>
              <div className="title">
                <span onClick={handleEdit(id)}>{title}</span>
                <button onClick={handleRemove(id)}>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 400 400"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path d="M70.33 377.07C82.05 398.73 97.11 400 111.11 400C128.89 400 271.11 400 288.89 400C313.44 400 333.33 380.11 333.33 355.56C333.33 328.89 333.33 153.55 333.33 103.05C333.33 95.23 326.99 88.89 319.17 88.89C268.67 88.89 131.33 88.89 80.83 88.89C73.01 88.89 66.67 95.23 66.67 103.05C66.67 136.72 66.67 220.88 66.67 355.56C67.12 366.22 68.34 373.4 70.33 377.07Z"></path>
                    <path d="M155.79 0C148.52 0 141.56 2.89 136.42 8.02C133.58 10.86 131.41 13.03 128.16 16.29C124.36 20.09 119.2 22.22 113.83 22.22C99.95 22.22 69.33 22.22 56.1 22.22C49.67 22.22 44.44 27.44 44.44 33.88C44.44 40.44 44.44 47.7 44.44 54.07C44.44 61.03 50.09 66.67 57.04 66.67C116.75 66.67 281.33 66.67 340.56 66.67C348.84 66.67 355.56 59.95 355.56 51.67C355.56 45.78 355.56 42.02 355.56 35.86C355.56 28.33 349.45 22.22 341.92 22.22C329.09 22.22 300.68 22.22 286.97 22.22C281.08 22.22 275.44 19.88 271.28 15.72C268.14 12.58 266.6 11.05 263.81 8.25C258.52 2.97 251.36 0 243.88 0C224 0 175.74 0 155.79 0Z"></path>
                  </svg>
                </button>
              </div>
              <p className="description">{minifyParagraph(description, 250)}</p>
              <p className="category">{`#${category.toUpperCase()}`}</p>
            </div>
            <img src={media} width="240px" height="240px" />
          </li>
        )
      )}
    </ul>
  );
}

export default forwardRef(BookShelf);
