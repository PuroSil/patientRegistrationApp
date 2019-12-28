import {
  FETCH_PATIENTS_REQUEST,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAILURE
} from "./patientTypes";

const initialState = {
  loading: false,
  patients: [],
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PATIENTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_PATIENTS_SUCCESS:
      return {
        loading: false,
        patients: action.payload,
        error: ''
      }
    case FETCH_PATIENTS_FAILURE:
      return {
        loading: false,
        patients: [],
        error: action.payload
      }
    default:
      return state
  };
};

export default reducer;
