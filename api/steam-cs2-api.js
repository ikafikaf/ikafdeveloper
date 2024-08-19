const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/', {
      params: {
        appid: 730,
        key: 'AE136C4F3025116395DCDAEB588F24FB',
        steamid: '76561198081052571',
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from Steam API' });
  }
};