import React from "react";
import { useSelector, useDispatch } from "react-redux";
import booksSelectors from "../redux/selectors/books";
import {
  showModal,
  setModalMode,
  clearModalForm,
} from "../redux/actions/modal";
import "./classes/navbar.css";

/**
 * A React function component that renders a navigation bar containing a set of
 * navigation links and an add button.
 * @param {{onLinkClick: (index: number) => (event: React.MouseEvent) => void, max: number }} props
 * The component's props that contain the navigation link onClick handler and
 * the max number of links in the navigation bar.
 */
export default function NavBar(props) {
  // Destructuring component props
  const { onLinkClick = (index) => (event) => {}, max } = props;

  // Retrieving the redux store's dispatch function
  const dispatch = useDispatch();

  // Selecting necessary values from redux state
  const categories = useSelector(booksSelectors.bookCategories);

  /**
   * Handles the onClick event for when the navbar add button is clicked.
   * @param {React.MouseEvent} event The event object.
   */
  const handleAdd = (event) => {
    // Dispatch redux state actions
    dispatch(clearModalForm());
    dispatch(setModalMode("add"));
    dispatch(showModal());
  };

  return (
    <nav className="navbar">
      <ul>
        {categories.slice(0, max).map((category, index) => (
          <li key={category}>
            <a href={`#${category}`} onClick={onLinkClick(index)}>
              {category.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M165.69 12.98C165.63 13.14 165.35 13.98 164.84 15.48L164.75 90.06L164.69 164.68C120.51 164.68 95.97 164.68 91.06 164.68C9.22 164.68 14.97 164.53 10.31 166.81C7.06 168.37 3.69 171.74 2.09 175.03C0.03 179.21 0 179.59 0 199.99C0 220.33 0.06 220.8 2.06 224.83C4.22 229.24 7.91 232.43 12.81 234.18C12.99 234.24 13.88 234.56 15.47 235.15L90.06 235.24L164.69 235.3L164.75 309.92L164.84 384.51C165.37 386.01 165.66 386.84 165.72 387.01C168 393.45 173.19 398.16 179.56 399.51C182.72 400.16 217.28 400.16 220.44 399.51C226.81 398.16 232 393.45 234.28 387.01C234.34 386.84 234.63 386.01 235.16 384.51L235.25 309.92L235.31 235.3L309.94 235.24L384.53 235.15C386.12 234.56 387.01 234.24 387.19 234.18C392.09 232.43 395.78 229.24 397.94 224.83C399.94 220.8 400 220.33 400 199.99C400 179.59 399.97 179.21 397.91 175.03C396.31 171.74 392.94 168.37 389.69 166.81C385.03 164.53 390.78 164.68 308.94 164.68C304.03 164.68 279.49 164.68 235.31 164.68L235.25 90.06L235.16 15.48C234.65 13.98 234.37 13.14 234.31 12.98C232.13 6.63 226.81 1.82 220.47 0.48C217.34 -0.18 182.44 -0.15 179.38 0.51C173.16 1.82 167.84 6.7 165.69 12.98Z"></path>
        </svg>
        <span>BOOK</span>
      </button>
    </nav>
  );
}
