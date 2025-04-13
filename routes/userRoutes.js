
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Club = require('../models/Club');

router.post('/join', async (req, res) => {
  const { name, city } = req.body;
  try {
    const user = new User({ name, city });
    await user.save();
    let club = await Club.findOne({ city });
    if (!club) {
      club = new Club({ city, players: [user._id] });
    } else {
      club.players.push(user._id);
    }
    await club.save();
    res.status(201).json({ user, club });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/clubs/:city/players', async (req, res) => {
  try {
    const club = await Club.findOne({ city: req.params.city }).populate('players');
    res.json(club ? club.players : []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
