/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const Patient = new mongoose.Schema({
  firstName: {
    required: [true, 'First name is required.'],
    type: String,
    default: '',
  },
  lastName: {
    required: [true, 'Last name is required.'],
    type: String,
    default: '',
  },
  address: {
    required: [true, 'Address is required.'],
    type: String,
    default: '',
  },
  city: {
    type: String,
    required: [true, 'City is required.'],
    default: '',
  },
  postnumber: {
    required: [true, 'Postnumber is required.'],
    minlength: [5, 'Postnumber must be 5 numbers long.'],
    maxlength: [5, 'Postnumber must be 5 numbers long.'],
    type: Number,
    default: 12345,
  },
  phone: {
    required: [true, 'Phonenumber is required.'],
    minlength: [10, 'Phonenumber must be 10 numbers long.'],
    maxlength: [10, 'Phonenumber must be 10 numbers long.'],
    type: Number,
    default: 1234567890,
  },
  socialSecurityNumber: {
    required: [true, 'Social security number is required.'],
    minlength: [11, 'Social security number has to be 11 characters long.'],
    maxlength: [11, 'Social security number has to be 11 characters long.'],
    type: String,
    default: 123456 - 7890,
  },
  comment: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Patient', Patient);
