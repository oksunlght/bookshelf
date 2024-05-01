const refs = {
  form: document.querySelector('.signup-form'),
  signUpBtn: document.querySelector('.sign-up-btn'),
  signInSwitch: document.querySelector('.user-sign-in'),
  signUpSwitch: document.querySelector('.user-sign-up'),
};

refs.signUpBtn.addEventListener('click', e => {
  e.preventDefault();

  const formElem = refs.form.elements;

  const newUser = {
    user: formElem.name.value,
    email: formElem.email.value,
    password: formElem.password.value,
  };

  refs.form.reset();

  console.log(newUser);
});

refs.signInSwitch.addEventListener('click', e => {
  e.preventDefault();

  const signInMarkup =
    '<label class="form-label"><input type="text" class="form-input" name="name" placeholder="name" /></label><label class="form-label"><svg class="input-icon" width="26" height="26"><use href="./images/sprite.svg#email"></use></svg><input type="email" class="form-input" name="email" placeholder="email" /></label><label class="form-label"><svg class="input-icon" width="26" height="26"><use href="./images/sprite.svg#password"></use></svg><input type="password" class="form-input" name="password" placeholder="password" /></label><button type="button" class="sign-up-btn">Sign in</button>';

  refs.signUpSwitch.classList.remove('active');
  refs.signInSwitch.classList.add('active');
  refs.form.innerHTML = signInMarkup;

  console.log(e.target);
});
