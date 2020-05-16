import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LoginComponent from './components/LoginComponent';

import {Users} from './models/users';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';

import logo from './logo.svg';
import './App.css';
import RegisterComponent from './components/RegisterComponent';

function App(){

  //@ts-ignore
  const [authUser, setAuthUser] = useState(null as User);
  //@ts-ignore
  const [newUser, setNewUser] = useState(null as User);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" render={() => <LoginComponent authUser={authUser} setAuthUser={setAuthUser} />} />
          <Route path = "/register" render = {() =><RegisterComponent newUser = {newUser} setNewUser = {setNewUser}/>}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
