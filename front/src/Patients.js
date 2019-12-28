import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPatients } from './redux/patientActions';
export * from './redux/patientActions';

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

export default connect (
  mapStateToProps,
  mapdDispatchToProps
)(Patients);
