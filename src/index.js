import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  select: document.getElementById('single'),
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
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
  })
  .finally(() => {
    refs.loader.classList.add('unvisible');
  });

function renderCats(cats) {
  const marcup = cats
    .map(({ id, name }) => {
      return `<option value=${id}>${name}</option>`;
    })
    .join('');
  refs.select.insertAdjacentHTML('beforeend', marcup);

  new SlimSelect({
    select: '#single',
  });
}

refs.select.addEventListener('change', onSelectChange);

function onSelectChange(event) {
  refs.loader.classList.remove('unvisible');
  const breedId = event.target.value;
  refs.catInfo.innerHTML = '';

  fetchCatByBreed(breedId)
    .then(breed => {
      renderBreeds(breed);
    })
    .catch(error => {
      console.log(error);
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally(() => {
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
