export const fetchByCode = async (code) => {
  const endpoint = `https://restcountries.com/v3.1/alpha/${code}`

  return fetch(endpoint).then((response) => response.json())
}
