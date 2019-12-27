import axios from 'axios';
import {
  FETCH_PATIENTS_REQUEST,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAILURE 
} from "./patientTypes";

export const fetchPatientsRequest = () => {
  return {
    type: FETCH_PATIENTS_REQUEST
  };
};

export const fetchPatientsSuccess = patients => {
  return {
    type: FETCH_PATIENTS_SUCCESS,
    payload: patients
  };
};

export const fetchPatientsFailure = error => {
  return {
    type: FETCH_PATIENTS_FAILURE,
    payload: error
  };
};

export const fetchPatients = () => {
  return (dispatch) => {
    dispatch(fetchPatientsRequest)
    axios.get('http://localhost:8000/api/getPatients')
      .then(response => {
        const patients = response.data
        console.log(patients)
        dispatch(fetchPatientsSuccess(patients))
      })
      .catch(error => {
        const errorMessage = error.message
        dispatch(fetchPatientsFailure(errorMessage))
      })
  };
};
