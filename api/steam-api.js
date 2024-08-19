const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/', {
      params: {
        key: 'AE136C4F3025116395DCDAEB588F24FB',
        steamids: '76561198081052571'
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from Steam API' });
  }
};