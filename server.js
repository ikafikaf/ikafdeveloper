const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/steam-api', async (req, res) => {
  try {
    const response = await axios.get('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/', {
      params: {
        key: '500A82442F796EF7801E0E55C13CA38F',
        steamids: '76561198081052571'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from Steam API' });
  }
});

// get game data from steam api
app.get('/steam-cs2-api', async (req, res) => {
  try {
    const response = await axios.get('http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/', {
      params: {
        appid: 730,
        key: '500A82442F796EF7801E0E55C13CA38F',
        steamid: '76561198081052571',
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from Steam API' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));