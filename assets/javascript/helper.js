/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const invokeToggleListener = (handle, book, bookIndex) => {
  handle.addEventListener('click', () => {
    book.updateReadStatus();
    const newStatus = book.readStatus ? 'Read' : 'Unread';
    document.getElementById(`book-status-${bookIndex}`).innerHTML = newStatus;
  });
};
const invokeDeleteListener = (handle, bookIndex, library, rowItem) => {
  handle.addEventListener('click', () => {
    const bookStore = library.books();
    library.removeBook(bookStore, bookIndex);
    rowItem.parentElement.removeChild(rowItem);
  });
};

const renderEachBook = (library, book, bookIndex, bookSection) => {
  const tr = document.createElement('tr');
  tr.setAttribute('id', `book-${bookIndex}`);
  const readStatus = book.readStatus ? 'Read' : 'Unread';
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
  bookSection.appendChild(tr);
  // toggle button listener
  invokeToggleListener(document.getElementById(`toggle-read-${bookIndex}`), book, bookIndex);
  // delete button listener
  invokeDeleteListener(document.getElementById(`remove-book-${bookIndex}`), bookIndex, library, tr);
};

const render = (library) => {
  const bookSection = document.getElementById('book-section');
  library.books().forEach((book, bookIndex) => {
    renderEachBook(library, book, bookIndex, bookSection);
  });
};
const prepareDOMToRenderLibrary = (library) => {
  // if library is empty create new book
  if (library.emptyLibrary()) {
    library.addBook('Test Author', 'Test title', 2, false);
  }
  document.getElementById('book-section').innerHTML = '';
  document.getElementById('add-book-form').setAttribute('class', 'no-display');
  render(library);
};

const displayHTMLForm = () => {
  const form = document.getElementById('add-book-form');
  form.reset();
  form.removeAttribute('class');
};
const bookParams = () => {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const readStatus = document.getElementById('read-status').value === 'true';

  return [author, title, pages, readStatus];
};
const submitForm = (library) => {
  library.addBook(...bookParams());
  prepareDOMToRenderLibrary(library);
};

const addToLocalStorage = (book) => {
};
const fetchDataFromLocalStorage = () => {

};
const addToFirebase = (book) => {

};
const fetchDataFromFirebase = () => {

};
