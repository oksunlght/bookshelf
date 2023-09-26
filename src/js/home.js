import BookApiService from './fetch-api';

const homePage = document.querySelector('.home-wrap');

onMainPageFetch();

function onMainPageFetch() {
  BookApiService.getPopularBooks().then(onPopularBooksFetch);
}

function onPopularBooksFetch(books) {
  const categoryBooksMarkup = books
    .map(({ list_name, books }) => {
      const categoryTitile = `<h2 class="home-category-title">${list_name}</h2>`;
      const booksMarkup = books
        .map(({ author, book_image, title, _id }) => {
          return `<li class="home__book-item" data-id="${_id}">
          <img src="${book_image}" alt="${title}" class="book-image" />
          <p class="book-title">${title}</p>
          <p class="book-author">${author}</p>
          </li>`;
        })
        .join('');

      return `${categoryTitile}<ul class="home__category-books">${booksMarkup}</ul><button type="submit" class="more-btn" data-list="${list_name}">See more</button>`;
    })
    .join('');

  homePage.insertAdjacentHTML('beforeend', categoryBooksMarkup);
}

export default onMainPageFetch;
