/* eslint-disable linebreak-style */
const Patient = require('../models/Patient');

const daoAddPatient = async (patient) => {
  const newPatient = new Patient(patient);
  const savedPatient = await newPatient.save();
  return savedPatient;
};


module.exports = {
  daoAddPatient,
};
