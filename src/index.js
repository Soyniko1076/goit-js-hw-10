import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

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

refs.select.addEventListener('change', onSelectChange);

function onSelectChange(event) {
  fetchCatByBreed(event.target.value)
    .then(breed => renderBreeds(breed))
    .catch(error => console.log(error));
}

function renderBreeds(breed) {
  const marcupBreeds = breed
    .map(({ url, breeds }) => {
      return `<ul><li><img src="${url}" width='300'><h2>${breeds[0].name}</h2><p>${breeds[0].description}</p><p>${breeds[0].temperament}</p></li></ul>`;
    })
    .join('');

  refs.catInfo.insertAdjacentHTML('beforeend', marcupBreeds);
}
