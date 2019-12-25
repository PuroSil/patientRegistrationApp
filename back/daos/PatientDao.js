/* eslint-disable linebreak-style */
const Patient = require('../models/Patient');

const daoAddPatient = async (patient) => {
  const newPatient = new Patient(patient);
  const savedPatient = await newPatient.save();
  return savedPatient;
};

const daoGetPatients = async () => {
  const patients = await Patient.find({});
  return patients;
};

const daoGetPatientsByName = async (firstName, lastName) => {
  const patients = await Patient.find({ firstName, lastName });
  return patients;
};

module.exports = {
  daoAddPatient,
  daoGetPatients,
  daoGetPatientsByName,
};
