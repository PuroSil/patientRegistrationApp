const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: {
    required: [true, 'Users name is required.'],
    type: String,
    default: ''
  },
  password: {
    required: [true, 'Password is required.'],
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('User', User);
