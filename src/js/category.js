import BookApiService from './fetch-api';

const categoryName = document.querySelector('.category-container');
const homePage = document.querySelector('.books-wrapper');
const pageTitle = document.querySelector('.title');
const categoryList = document.querySelector('.single-category-list');
const popularBooksWrapper = document.querySelector('.home-wrap');

categoryName.addEventListener('click', onCategoryClick);
homePage.addEventListener('click', onMoreBtnClick);

function onCategoryClick(e) {
  const selectedCategory = e.target.dataset.list;

  if (!selectedCategory) {
    return;
  }

  e.preventDefault();

  if (e.target.nodeName !== 'A') {
    return;
  }

  handleActiveLink(e);

  BookApiService.getBooksByCategory(selectedCategory).then(data =>
    onBooksByCategoryFetch(addTitleStyle(selectedCategory), data)
  );
}

function onBooksByCategoryFetch(category, books) {
  const markup = books
    .map(({ _id, author, book_image, title }) => {
      return `<li class="single-category__item" data-id="${_id}">
    
      <img src="${book_image}" alt="${title}" class="single-category__image" />
      <p class="book-title">${title}</p>
      <p class="book-author">${author}</p>
    
      </li>`;
    })
    .join('');

  pageTitle.innerHTML = category;
  popularBooksWrapper.classList.add('visually-hidden');
  categoryList.classList.remove('visually-hidden');
  categoryList.innerHTML = markup;
}

function handleActiveLink(e) {
  const activeCategory = document.querySelector('.active');

  if (activeCategory !== e.target) {
    activeCategory.classList.remove('active');
  }
  e.target.classList.add('active');
}

function addTitleStyle(selectedCategory) {
  const categoryArray = selectedCategory.split(' ');
  const categoryLastElemIndex = categoryArray.length - 1;
  const lastTitleElement = categoryArray.splice(categoryLastElemIndex, 1);
  const remainingTitle = categoryArray.join(' ');
  const styledTitle = `<h2 class="category-title">${remainingTitle} <span class="category-title_highlight">${lastTitleElement}</span></h2>`;
  return styledTitle;
}

function onMoreBtnClick(e) {
  const selectedCategory = e.target.dataset.list;
  const activeCategory = document.querySelector('.active');
  const chosenCategory = document.querySelector(
    `a[data-list='${selectedCategory}']`
  );

  if (!selectedCategory) {
    return;
  }

  e.preventDefault();

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  if (activeCategory !== selectedCategory) {
    activeCategory.classList.remove('active');
  }

  chosenCategory.classList.add('active');

  BookApiService.getBooksByCategory(selectedCategory).then(data =>
    onBooksByCategoryFetch(addTitleStyle(selectedCategory), data)
  );
}
