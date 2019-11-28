/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const myLibrary = new Library();
window.addEventListener('load', () => prepareDOMToRenderLibrary(myLibrary));
document.getElementById('add-new-book').addEventListener('click', () => displayHTMLForm());
document.getElementById('add-book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm(myLibrary);
});
