

// Service function for fetching data from the OBA API
async function fetchData(query) {
  try {
    const fetch = await import('node-fetch');

    const apiKey = '187b973dc49e054fa7635313a9c8540f';
    const url = `https://api.oba.nl/api/v1/search/?q=${query}&authorization=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    // Check if the data has been fetched successfully
    if (response.ok) {
      // Data has been fetched successfully
      console.log('Data fetched successfully:', data);
      return data;
    } else {
      // Data fetch was not successful
      console.error('Error fetching data:', data);
      throw new Error('Failed to fetch data from the OBA API.');
    }
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while fetching data from the OBA API.');
  }
}

module.exports = {
  fetchData,
};