const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_Yev63kKIKQlvuwfV91tmMhA4RcWdQRKBtpQEc40LBA3Gqtc0uo9ZdRzJSAOtGlda';

export const fetchBreeds = () => {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error('response.statusText');
    }
    return response.json();
  });
};

export const fetchCatByBreed = breedId => {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error('response.statusText');
    }
    return response.json();
  });
};
