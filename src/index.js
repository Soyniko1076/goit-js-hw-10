function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const API_KEY =
        'live_Yev63kKIKQlvuwfV91tmMhA4RcWdQRKBtpQEc40LBA3Gqtc0uo9ZdRzJSAOtGlda';
    
    return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}&`).then(resp => {
        if (!resp.ok) {
        throw new Error('resp.statusText')
        }
        return resp.json()
    })
}

fetchBreeds().then(data => console.log(data)).catch(err => console.log (err))
