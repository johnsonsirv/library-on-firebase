/* eslint-disable linebreak-style */
function Library() {
  this.arr = [];
}
Library.prototype = {
  constructor: Library,
  books() {
    return this.arr;
  },
  emptyLibrary() {
    return this.arr.length === 0;
  },
  addBook(author, title, pages, readStatus) {
    // eslint-disable-next-line no-undef
    const book = new Book(author, title, pages, readStatus);
    this.arr.push(book);
    return book;
  },
  removeBook(bookStore, bookIndex) {
    bookStore.splice(bookIndex, 1);
    return bookStore;
  },
};
