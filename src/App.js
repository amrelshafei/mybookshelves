import React, { createRef } from "react";
import { useSelector } from "react-redux";
import BooksSelectors from "./redux/selectors/books";
import BookShelf from "./components/BookShelf";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import "./App.css";

/**
 * A React function component that renders the application.
 * @param {{categories: string[], max: number }} props The component's props
 * that contain the selectable categories and the max number of links in the
 * navigation bar.
 */
function App(props) {
  // Destructuring component props
  const { selectable = [], max = 3 } = props;

  // Selecting necessary values from redux state
  const books = useSelector(BooksSelectors.bookList);
  const categories = useSelector(BooksSelectors.bookCategories);

  // List of refs for only the first "max" BookShelf react components
  const refs = Array(max).fill(null);

  /**
   * Handles the onClick event for when any of the navbar links is clicked.
   * @param {number} index The index of the navigation link.
   * @returns {(event: React.MouseEvent) => void} The navigation link onClick
   * handler.
   */
  const handleLinkClick = (index) => (event) => {
    // Scroll to the start of the Bookshelf with the given index
    refs[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="app">
      <NavBar onLinkClick={handleLinkClick} max={max} />
      <Modal categories={selectable} />
      <main>
        <h1>My Bookshelves</h1>
        <p>
          Well, you know what? You can't come up with that ceaseless excuse
          anymore. Because the truth is we do have the time to read. Sure, any
          reader will often hit slow patches and slip into social media black
          holes. But there is one thing that should never change, the habbit of
          reading! Here you can find a list of all the books I read or will
          finish reading soon. I guess you can call this my personal
          bookshelves. Have a look!
        </p>
        {categories.length === 0 ? (
          <div className="empty">no books here, click the add button +</div>
        ) : (
          categories.map((category, index) => {
            if (index < max) refs[index] = createRef();
            return (
              <BookShelf
                key={category}
                ref={index < max ? refs[index] : undefined}
                books={books.filter((book) => book.category === category)}
              />
            );
          })
        )}
      </main>
    </div>
  );
}

export default App;
