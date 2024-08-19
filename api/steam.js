// api/steam.js

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/steam-api', async (req, res) => {
  try {
    const response = await axios.get('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/', {
      params: {
        key: 'AE136C4F3025116395DCDAEB588F24FB',
        steamids: '76561198081052571'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from Steam API' });
  }
});

app.get('/steam-cs2-api', async (req, res) => {
  try {
    const response = await axios.get('http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/', {
      params: {
        appid: 730,
        key: 'AE136C4F3025116395DCDAEB588F24FB',
        steamid: '76561198081052571',
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from Steam API' });
  }
});

module.exports = app;
