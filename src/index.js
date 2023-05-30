import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

const refs = {
  select: document.querySelector('select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(cats => {
    renderCats(cats);
    refs.loader.classList.add('unvisible');
    refs.select.classList.remove('unvisible');
  })
  .catch(error => {
    console.log(error);
    refs.loader.classList.add('unvisible');
    refs.error.classList.remove('unvisible');
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
  refs.catInfo.innerHTML = '';
  fetchCatByBreed(breedId)
    .then(breed => renderBreeds(breed))
    .catch(error => {
      console.log(error);
      refs.error.classList.remove('unvisible');
      refs.loader.classList.add('unvisible');
    });
}

function renderBreeds(breed) {
  const marcupBreeds = breed
    .map(({ url, breeds }) => {
      return `<img src="${url}" width='350' hight='auto'><div class="wrapper"><h1 class="title">${breeds[0].name}</h1><p class="description">${breeds[0].description}</p>
      <span class="accent">Temperament: </span><p>${breeds[0].temperament}</p></div>`;
    })
    .join('');

  refs.catInfo.insertAdjacentHTML('beforeend', marcupBreeds);
  refs.loader.classList.add('unvisible');
}
