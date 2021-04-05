/**
 * Minifies a paragraph string to the first given number of words only. If the
 * string has less words than the given size, the same string is returned.
 * @param {string} paragraph The paragraph string.
 * @param {int} size The maximum number of words in the returned string.
 * @returns {string} a minified paragraph string.
 */
export function minifyParagraph(paragraph, size) {
  if (size > paragraph.length) {
    return paragraph;
  } else {
    const words = paragraph.slice(0, size).split(" ");
    words.pop();
    return words.join(" ") + " ...";
  }
}

/**
 * Capitalizes a paragraph string by turning the first letter of each word into
 * an uppercase.
 * @param {string} paragraph The paragraph string.
 * @returns {string} a capitalized paragraph string.
 */
export function capitalizeParagraph(paragraph) {
  const words = paragraph.split(" ");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Compares the same field between two objects.
 * @param {string} field The field to be compared.
 * @returns {(a, b) => number} a callback function that compares the given
 * field.
 */
export function compareField(field) {
  return (a, b) => {
    return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
  };
}
