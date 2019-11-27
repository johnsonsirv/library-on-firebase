/* eslint-disable linebreak-style */
function Book(author, title, pages, readStatus) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = Math.round(Math.random() * 1000000000); // unique id for each book
}
Book.prototype.constructor = Book;
Book.prototype.updateReadStatus = () => {
  this.readStatus = !this.readStatus;
};
