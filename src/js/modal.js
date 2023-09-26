import BookApiService from './fetch-api';

const catgoryBooksList = document.querySelector('.single-category-list');
const backdrop = document.querySelector('.backdrop');
const bookContainer = document.querySelector('.book-wrapper');
const closeModalBtn = document.querySelector('.pop-up-close');
const homePage = document.querySelector('.home-wrap');

catgoryBooksList.addEventListener('click', e => {
  e.preventDefault();
  const selectedElement = e.target.closest('.single-category__item');

  if (!selectedElement) {
    return;
  }

  const selectedBookId = selectedElement.dataset.id;

  BookApiService.getBookByID(selectedBookId).then(renderBookPopUp);
});

homePage.addEventListener('click', e => {
  e.preventDefault();

  const selectedItem = e.target.closest('.home__book-item');

  if (!selectedItem) {
    return;
  }
  const selectedBookId = selectedItem.dataset.id;

  BookApiService.getBookByID(selectedBookId).then(renderBookPopUp);
});

closeModalBtn.addEventListener('click', onModalClose);

window.addEventListener('keydown', handleKeyDown);

backdrop.addEventListener('click', handleBackdropClick);

function renderBookPopUp(book) {
  const { author, book_image, buy_links, description, title } = book;

  const amazonLink = buy_links.filter(({ name }) => name === 'Amazon');
  const amazonLinkMarkup = amazonLink.map(
    ({ url }) => `<a href="${url}" target=”_blank” class="amazon"></a>`
  );

  const appleBooksLink = buy_links.filter(({ name }) => name === 'Apple Books');
  const appleBooksLinkMarkup = appleBooksLink.map(
    ({ url }) => `<a href="${url}" target=”_blank” class="apple-books"></a>`
  );

  const popUpMarkup = `
    <img src="${book_image}" alt="${title}" class="pop-book-image" />
    <div class="book-description">
    <h2 class="pop-up-title">${title}</h2>
    <p class="pop-up-author">${author}</p>
    <p class="pop-up-description">${description}</p>
    <ul class="buy-links">
    <li class="buy-link-item">${amazonLinkMarkup}</li>
    <li class="buy-link-item">${appleBooksLinkMarkup}</li>
    </ul>
    </div>
    `;

  bookContainer.innerHTML = popUpMarkup;
  backdrop.classList.remove('is-hidden');
}

function onModalClose() {
  backdrop.classList.add('is-hidden');
}

function handleKeyDown(e) {
  if (backdrop.classList.contains('is-hidden')) {
    return;
  }
  if (e.code !== 'Escape') {
    return;
  }

  onModalClose();
}

function handleBackdropClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }

  onModalClose();
}
