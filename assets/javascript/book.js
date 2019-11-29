/* eslint-disable linebreak-style */
function Book(author, title, pages, readStatus = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;
}
Book.prototype = {
  constructor: Book,
  updateReadStatus() { this.readStatus = !this.readStatus; },
};
