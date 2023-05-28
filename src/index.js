const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');

function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const API_KEY =
    'live_Yev63kKIKQlvuwfV91tmMhA4RcWdQRKBtpQEc40LBA3Gqtc0uo9ZdRzJSAOtGlda';

  // console.log(select)

  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error('response.statusText');
    }
    return response.json();
  });
}

fetchBreeds()
  .then(cats => {
    // console.log(cats);

    renderCats(cats);
  })
  .catch(error => console.log(error));

function renderCats(cats) {
  const marcup = cats
    .map(({ id, name }) => {
      return `<option value=${id}>${name}</option>`;
    })
    .join('');
  //   console.log(marcup);

  refs.select.insertAdjacentHTML('beforeend', marcup);
}
