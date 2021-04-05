export const bookList = ({ books }) => books;

export const bookCategories = ({ books }) => {
  const count = books.reduce((count, { category }) => {
    return {
      ...count,
      [category]:
        typeof count[category] === "undefined" ? 1 : count[category] + 1,
    };
  }, {});

  return Object.keys(count)
    .sort((a, b) => (a > b ? -1 : a > b ? 1 : 0))
    .sort((a, b) => (count[a] > count[b] ? -1 : count[a] > count[b] ? 1 : 0));
};

export default {
  bookList,
  bookCategories,
};
