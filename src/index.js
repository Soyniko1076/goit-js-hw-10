const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_Yev63kKIKQlvuwfV91tmMhA4RcWdQRKBtpQEc40LBA3Gqtc0uo9ZdRzJSAOtGlda';

const select = document.querySelector(".breed-select");
// console.log(select)
function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error('response.statusText');
    }
    return response.json();
  });
}

fetchBreeds()
  .then(data => {
    // console.log(data);
    renderCats(data);
  })
  .catch(error => console.log(error));


function renderCats(data) {
  const marcup = data
    .map(({ id, name }) => {
      return `<option value=${id}>${name}</option>`;
    })
    .join('');
//   console.log(marcup);
  select.insertAdjacentHTML('beforeend', marcup);
}


