var search = document.getElementById('search');

if (search !== null) {
  document.addEventListener('keydown', inputFocus);
}

function inputFocus(e) {
  if (e.ctrlKey && e.key === '/' ) {
    e.preventDefault();
    search.focus();
  }
  if (e.key === 'Escape' ) {
    search.blur();
  }
}

/* eslint-disable */
if (document.querySelector('#search') !== null) {
  docsearch({
    apiKey: 'TODO',
    indexName: 'TODO',
    inputSelector: '#search',
    debug: false,
  });
}
/* eslint-enable */

/*
 * https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/
 * https://answers.netlify.com/t/how-to-include-dependencies-in-netlify-lambda-functions/2323/38
*/

/* eslint-disable */
const processForm = form => {
  const data = new FormData(form)
  data.append('form-name', 'newsletter');
  fetch('/', {
    method: 'POST',
    body: data,
  })
  .then(() => {
    form.innerHTML = '<p class="form--success"><strong>Almost there!</strong> Check your inbox for a confirmation e-mail.</p>';
  })
  .catch(error => {
    form.innerHTML = '<p class="form--error"><strong>Error:</strong> ${error}</p>';
  })
}

const emailForm = document.querySelector('.email-form')
if (emailForm) {
  emailForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm(emailForm);
  })
}
/* eslint-enable */
