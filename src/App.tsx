import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import {Users} from './models/users';
import {Reimbursements} from './models/reimbs';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';


import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import ReimbComponent from './components/ReimbsComponent'



import logo from './logo.svg';
import './App.css';

function App(){

  //@ts-ignore
  const [authUser, setAuthUser] = useState(null as Users);
  //@ts-ignore
  const [newUser, setNewUser] = useState(null as Users);
  //@ts-ignore
  const [newReimb, setNewReimb] = useState(null as Reimbursements);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" render={() => <LoginComponent authUser={authUser} setAuthUser={setAuthUser} />} />
          <Route path = "/register" render = {() =><RegisterComponent newUser = {newUser} setNewUser = {setNewUser}/>}/>
          <Route path = "/reimb" render = {()=><ReimbComponent newReimb = {newReimb} setNewReimb = {setNewReimb}/>} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
