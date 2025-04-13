
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);
