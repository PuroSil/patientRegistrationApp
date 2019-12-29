import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPatients } from './redux/patientActions';
export * from './redux/patientActions';

const Patients = ({ patientData, fetchPatients}) => {

  useEffect(() => {
    fetchPatients()
  }, [])

  return patientData.loading ? (
    <h2>Loading</h2>
  ) : patientData.error ? (
    <h2>{patientData.error}</h2>
  ) : (
    <div className="App">
      <h2>Patient List</h2>
      <div>
        {
          patientData &&
          patientData.patients &&
          patientData.patients.map(
            patient => 
            <p>{
              patient.firstName
            }</p>
          )
        }
      </div>
    </div>
  )
}

Patients.propTypes = {
  fetchPatients: PropTypes.func.isRequired,
  patientData: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    patientData: state.patient
  }
}

const mapdDispatchToProps = dispatch => {
  return {
    fetchPatients: () => dispatch(fetchPatients())
  }
}

export default connect (
  mapStateToProps,
  mapdDispatchToProps
)(Patients);
