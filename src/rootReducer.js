import { combineReducers } from 'redux';
import patientReducer from './redux/patientReducer';

const rootReducer = combineReducers({
  patient: patientReducer
});

export default rootReducer;
