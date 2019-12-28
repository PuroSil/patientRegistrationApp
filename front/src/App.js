import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Patients from './Patients';
export * from './redux/patientActions';

const App = () => {
  return (
    <Provider store={store}>
      <Patients />
    </Provider>
  )
}

export default App;
