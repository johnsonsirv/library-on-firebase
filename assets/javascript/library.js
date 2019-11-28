/* eslint-disable linebreak-style */
function Library() {
  this.arr = [];
}
Library.prototype.constructor = Library;
Library.prototype.books = () => this.arr;
Library.prototype.addBook = (author, title, pages, readStatus) => {
  // eslint-disable-next-line no-undef
  const book = new Book(author, title, pages, pages, readStatus);
  this.arr.push(book);
};

Library.prototype.removeBook = (bookStore, bookIndex) => {
  bookStore.splice(bookIndex, 1);
  return bookStore;
};
