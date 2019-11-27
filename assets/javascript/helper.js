/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const render = () => {
  // renders html rows containing each book object
};
const renderEachBook = (book, bookIndex) => {
  const tr = document.createElement('tr');
  tr.setAttribute('id', `book-${bookIndex}`);
  const readStatus = book.readStatus ? 'Unread' : 'Read';
  tr.innerHTML = `<td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.pages}</td>
                  <td>${readStatus}</td>`;
  // display each book author, title, pages, readstatus
  // generate add/remove button
};
const bookParams = () => {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const readStatus = document.getElementById('read-status').value;

  return [author, title, pages, readStatus];
};
const submitForm = (library) => {
  library.addBook(...bookParams());
  // call method to show it on the html view
};
const addToLocalStorage = (book) => {

};
const fetchDataFromLocalStorage = () => {

};
const addToFirebase = (book) => {

};
const fetchDataFromFirebase = () => {

};
