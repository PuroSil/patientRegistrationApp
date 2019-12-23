/* eslint-disable linebreak-style */
const router = require('express').Router();
const { daoAddPatient } = require('../daos/PatientDao');

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

router.post('/addPatient', addPatient);
