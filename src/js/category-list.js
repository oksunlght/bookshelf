import BookApiService from './fetch-api';

const categoryList = document.querySelector('.category-container');

BookApiService.getCategoryList(onCategoryListFetch).then(onCategoryListFetch);

function onCategoryListFetch(list) {
  const markup = list
    .map(({ list_name }) => {
      return `<li class="category-item"><a href="" class="category-link" data-list="${list_name}" >${list_name}</a></li>`;
    })
    .join('');

  categoryList.innerHTML = `<ul class="category-list"><li class="all-cat"><a href="" class="category-link active">All categories</a></li>${markup}</ul>`;
}
