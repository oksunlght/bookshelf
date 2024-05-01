import BookApiService from './fetch-api';

const refs = {
  openLogin: document.querySelector('.button-sign-up'),
  backdrop: document.querySelector('.backdrop-login'),
  closeBtn: document.querySelector('.close-login-btn'),
};

refs.openLogin.addEventListener('click', e => {
  refs.backdrop.classList.remove('is-hidden');
});

refs.closeBtn.addEventListener('click', onModalClose);

window.addEventListener('keydown', handleKeyDown);

refs.backdrop.addEventListener('click', handleBackdropClick);

function onModalClose() {
  refs.backdrop.classList.add('is-hidden');
}

function handleKeyDown(e) {
  if (refs.backdrop.classList.contains('is-hidden')) {
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
