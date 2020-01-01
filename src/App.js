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
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/patients" component={Patients}/>
      </Switch>
    </Provider>
  )
}

export default App;
