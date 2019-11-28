/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const invokeToggleListener = (handle, book, bookIndex) => {
  handle.addEventListener('click', () => {
    book.toggleRead();
    const newStatus = book.readStatus ? 'Read' : 'Unread';
    document.getElementById(`book-status-${bookIndex}`).innerText = newStatus;
  });
};
const invokeDeleteListener = (handle, bookIndex, library, rowItem) => {
  handle.addEventListener('click', () => {
    const bookStore = library.books();
    library.removeBook(bookStore, bookIndex);
    row.parentElement.removeChild(rowItem);
  });
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

const render = () => {
  // renders html rows containing each book object
};
const renderEachBook = (library, book, bookIndex, bookSection) => {
  const tr = document.createElement('tr');
  tr.setAttribute('id', `book-${bookIndex}`);
  const readStatus = book.readStatus ? 'Unread' : 'Read';
  tr.innerHTML = `<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td id="book-status-${bookIndex}">${readStatus}</td>
                <td>
                  <button id="toggle-read-${bookIndex}">
                    Toggle Read Status
                  </button> | 
                  <button id="remove-book-${bookIndex}">
                   Delete
                  </button>
                </td>`;
  bookSection.appendChild();
  // toggle button listener
  invokeToggleListener(document.getElementById(`toggle-read-${bookIndex}`), book, bookIndex);
  // delete button listener
  invokeDeleteListener(document.getElementById(`remove-book-${bookIndex}`), bookIndex, library, tr);
};

const addToLocalStorage = (book) => {

};
const fetchDataFromLocalStorage = () => {

};
const addToFirebase = (book) => {

};
const fetchDataFromFirebase = () => {

};
