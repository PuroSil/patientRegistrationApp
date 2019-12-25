/* eslint-disable linebreak-style */
const router = require('express').Router();
const {
  daoAddPatient,
  daoGetPatients,
  daoGetPatientsByName,
} = require('../daos/PatientDao');

module.exports = router;

const addPatient = async (req, res, next) => {
  const { body } = req;
  try {
    const sentPatient = await daoAddPatient(
      body,
    );
    return res.send(sentPatient);
  } catch (err) {
    return next(res.send({ message: err.toString() }));
  }
};

const getPatients = async (req, res, next) => {
  try {
    const patients = await daoGetPatients();
    return res.json(patients);
  } catch (err) {
    return next(res.send({ message: err.toString() }));
  }
};

const getPatientsByName = async (req, res, next) => {
  try {
    const patients = await daoGetPatientsByName(
      req.query.firstName, req.query.lastName,
    );
    return res.json(patients);
  } catch (err) {
    return next(res.send({ message: err.toString() }));
  }
};

router.post('/addPatient', addPatient);
router.get('/getPatients', getPatients);
router.get('/getPatientsByName', getPatientsByName);
