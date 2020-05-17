import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';

import {Users} from './models/users';
import {Reimbursements} from './models/reimbs';


import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import ReimbComponent from './components/NewReimbsComponent';
import HomeComponent from './components/HomeComponent';
import NavbarComponent from './components/NavbarComponent';
import UserComponent from './components/AllUserComponent'



import logo from './logo.svg';
import './App.css';
import UpdateUserComponent from './components/UpdateUserComponent';
import AllReimbComponent from './components/AllReimbComponent';

function App(){

  //@ts-ignore
  const [authUser, setAuthUser] = useState(null as Users);
  //@ts-ignore
  const [newUser, setNewUser] = useState(null as Users);
  //@ts-ignore
  const [updateUser, setUpdateUser] = useState(null as Users);
  //@ts-ignore
  const [newReimb, setNewReimb] = useState(null as Reimbursements);
  

  return (
    <>
      <Router>
        <AppBar color = "primary" position = "static">
          <Toolbar>
            <Typography>
              <NavbarComponent authUser = {authUser}/>
            </Typography>
          </Toolbar>
        </AppBar>
        <br/>
        <br/>
        
        <Switch>
          <Route path="/home" render = {() => <HomeComponent username = {authUser?.username}/>}/>
          <Route path="/login" render={() => <LoginComponent authUser={authUser} setAuthUser={setAuthUser} />} />
          <Route path = "/register" render = {() =><RegisterComponent newUser = {newUser} setNewUser = {setNewUser}/>}/>
          <Route path = "/users" render = {() => <UserComponent authUser = {authUser}/>}/>
          <Route path = "/user/update" render = {() =><UpdateUserComponent updateUser = {updateUser} setUpdateUser = {setUpdateUser}/>}/>
          <Route path = "/reimb/all" render = {() => <AllReimbComponent authUser = {authUser} allReimb = {newReimb} />}/>
          <Route path = "/reimb" render = {()=><ReimbComponent username = {authUser?.username} newReimb = {newReimb} setNewReimb = {setNewReimb}/>} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
