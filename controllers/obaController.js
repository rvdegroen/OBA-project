const obaService = require('../services/obaService');

// Controller function for handling the form submission
async function fetchData(req, res) {
  const { query } = req.body;

  try {
    const data = await obaService.fetchData(query);

    // Process the fetched data
    // ...

    res.json(data); // Return the fetched data as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data from the OBA API.' });
  }
}

module.exports = {
  fetchData,
};
