import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './store';
import Patients from './Patients';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
export * from './redux/patientActions';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Login path="/login" exact component={Login} />
          <Home path="/home" component={Home} />
          <Patients path="/patients" component={Patients}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
