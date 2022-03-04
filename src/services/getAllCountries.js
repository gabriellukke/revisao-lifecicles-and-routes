const getAllCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    return response.json();
  }
  catch (error) {
    return [];
  }
};

export default getAllCountries;
