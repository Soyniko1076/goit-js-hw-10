const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_Yev63kKIKQlvuwfV91tmMhA4RcWdQRKBtpQEc40LBA3Gqtc0uo9ZdRzJSAOtGlda';
const BREEDS_IDS = 'breed_ids';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error('response.statusText');
    }
    return response.json();
  });
}

fetchBreeds()
  .then(cats => {
    renderCats(cats);
  })
  .catch(error => console.log(error));

function renderCats(cats) {
  const marcup = cats
    .map(({ id, name }) => {
      return `<option value=${id}>${name}</option>`;
    })
    .join('');
  refs.select.insertAdjacentHTML('beforeend', marcup);
}



refs.select.addEventListener('change', fetchCatByBreed);

function fetchCatByBreed(breedId) {
  // console.log(breedId)

  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error('response.statusText');
    }
    return response.json();
  });
}

fetchCatByBreed().then(data => console.log(data)).catch(error => console.log(error))