const getCountriesByName = async (name) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const result = await response.json();
  return result;
};

export default getCountriesByName;
