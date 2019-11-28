/* eslint-disable linebreak-style */
function Book(author, title, pages, readStatus) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readStatus = readStatus;
}
Book.prototype = {
  constructor: Book,
  updateReadStatus() { this.readStatus = !this.readStatus; },
};
