const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: String,
  name: String,
  items: Array,
  address: String,
  pincode: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;