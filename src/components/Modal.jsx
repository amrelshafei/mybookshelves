import React from "react";
import { useSelector, useDispatch } from "react-redux";
import modalSelectors from "../redux/selectors/modal";
import booksActions from "../redux/actions/books";
import modalActions from "../redux/actions/modal";
import { capitalizeParagraph } from "../util";
import "./classes/modal.css";
import DefaultImage from "../media/XY123ABC.png";

/**
 * A React function component that renders a modal box containing a form for
 * inputing book details.
 * @param {{ categories: string[] }} props The component's props that contain
 * the categories that will be displayed in the form's category select field.
 */
export default function Modal(props) {
  // Destructuring component props
  const { categories = [] } = props;

  // retrieving the redux store's dispatch function
  const dispatch = useDispatch();

  // Selecting necessary values from redux state
  const modalShow = useSelector(modalSelectors.modalShow);
  const modalMode = useSelector(modalSelectors.modalMode);
  const formId = useSelector(modalSelectors.modalFormId);
  const formValue = useSelector(modalSelectors.modalFormValue);

  /**
   * Handles the onChange event for when the modal form value is changed.
   * @param {React.ChangeEvent} event The event object.
   */
  const handleChange = (event) => {
    // Dispatch redux state actions
    dispatch(
      modalActions.editModalFormValue({
        [event.target.name]: event.target.value,
      })
    );
  };

  /**
   * Handles the onSubmit event for when the modal form is submitted.
   * @param {React.FormEvent} event The event object.
   */
  const handleSubmit = (event) => {
    // Prevent default form reaction
    event.preventDefault();
    // Processing the input from the modal form
    const id = formId;
    const book = {
      ...formValue,
      price: "" + parseFloat(formValue.price).toFixed(2),
      media:
        formValue.media === ""
          ? window.location.origin + DefaultImage
          : formValue.media,
    };
    // Dispatch redux state actions
    dispatch(modalActions.hideModal());
    dispatch(modalActions.clearModalForm());
    if (modalMode === "add") dispatch(booksActions.addBook(book));
    if (modalMode === "edit") dispatch(booksActions.editBook(id, book));
  };

  /**
   * Handles the onClick event for when the modal form cancel button is clicked.
   * @param {React.MouseEvent} event The event object.
   */
  const handleCancel = (event) => {
    // Dispatch redux state actions
    dispatch(modalActions.hideModal());
    dispatch(modalActions.clearModalForm());
  };

  // Handling the onClick event for when the mouse is clicked outside the modal
  window.onclick = (event) => {
    if (event.target.className === "modal show") {
      // Dispatch redux state actions
      dispatch(modalActions.hideModal());
      dispatch(modalActions.clearModalForm());
    }
  };

  return (
    <div className={`modal ${modalShow ? "show" : "hide"}`}>
      <div className="fade-in-drop">
        <h1 className="header">{`${modalMode.toUpperCase()} BOOK`}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title *"
            value={formValue.title}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            value={formValue.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              select a category *
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {capitalizeParagraph(category)}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="description"
            placeholder="description *"
            value={formValue.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="price *"
            value={formValue.price}
            step={0.01}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="media"
            placeholder="media"
            value={formValue.media}
            onChange={handleChange}
          />
          <input type="submit" value={modalMode} />
          <input type="button" value="cancel" onClick={handleCancel} />
        </form>
      </div>
    </div>
  );
}
