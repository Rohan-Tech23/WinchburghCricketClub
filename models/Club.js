
const mongoose = require('mongoose');
const ClubSchema = new mongoose.Schema({
  city: { type: String, required: true, unique: true },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
module.exports = mongoose.model('Club', ClubSchema);
