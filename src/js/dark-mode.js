// const modal = document.querySelector('.pop-up');
// const modalCloseBtn = document.querySelector('.modal-close-button');
// const modalBuyBtn = document.querySelector('.purchase-button');

const refs = {
  themeSwitcher: document.querySelector('.switch'),
  bodyRef: document.querySelector('body'),
  header: document.querySelector('.header'),
  headerContainer: document.querySelector('.header-container'),
  headerNavItem: document.querySelector('.nav-item.current'),
  title: document.querySelector('.title'),
  // categoryTitle: document.querySelector('.category-title'),
};

refs.themeSwitcher.addEventListener('click', onToggleClick);

function onToggleClick(e) {
  if (!e.target.nodeName === 'INPUT') {
    e.preventDefault();
    return;
  }

  if (e.target.nodeName === 'INPUT') {
    refs.bodyRef.classList.toggle('dark');
    refs.header.classList.toggle('dark');
    refs.headerContainer.classList.toggle('dark');
    refs.headerNavItem.classList.toggle('dark');
    refs.title.classList.toggle('dark');
    // refs.categoryTitle.classList.toggle('dark');
  }
}
