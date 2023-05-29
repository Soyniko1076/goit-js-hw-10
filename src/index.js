import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

const refs = {
  select: document.querySelector('select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds().then(cats => {
  renderCats(cats);
  refs.loader.classList.add('unvisible');
  refs.select.classList.remove('unvisible');
});

function renderCats(cats) {
  const marcup = cats
    .map(({ id, name }) => {
      return `<option value=${id}>${name}</option>`;
    })
    .join('');
  refs.select.insertAdjacentHTML('beforeend', marcup);
}

refs.select.addEventListener('change', onSelectChange);

function onSelectChange(event) {
  refs.loader.classList.remove('unvisible');
  const breedId = event.target.value;
  fetchCatByBreed(breedId).then(breed => renderBreeds(breed));
}

function renderBreeds(breed) {
  const marcupBreeds = breed
    .map(({ url, breeds }) => {
      return `<img src="${url}" width='300'><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p>
      <h3>Temperament: </h3><p>${breeds[0].temperament}</p>`;
    })
    .join('');

  refs.catInfo.insertAdjacentHTML('beforeend', marcupBreeds);
  refs.loader.classList.add('unvisible');
}
