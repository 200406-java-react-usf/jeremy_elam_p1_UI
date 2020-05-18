import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';

import {Users} from './models/users';
import {Reimbursements} from './models/reimbs';

import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import ReimbComponent from './components/NewReimbsComponent';
import PendingReimbComponent from './components/PendingReimbComponent'
import ApprovedReimbComponent from './components/ApprovedReimbComponent'
import HomeComponent from './components/HomeComponent';
import NavbarComponent from './components/NavbarComponent';
import UserComponent from './components/AllUserComponent'
import UpdateUserComponent from './components/UpdateUserComponent';
import AllReimbComponent from './components/AllReimbComponent';
import DeniedReimbComponent from './components/DeniedReimbComponent';
import ChangeStatusReimbComponent from './components/ChangeStatusReimbComponent';
import logo from './logo.svg';
import './App.css';


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
              <NavbarComponent authUser = {authUser} setAuthUser = {setAuthUser}/>
            </Typography>
          </Toolbar>
        </AppBar>
        <br/>
        <br/>
        
        <Switch>
          <Route path="/home" render = {() => <HomeComponent authUser = {authUser}/>}/>
          <Route path="/login" render={() => <LoginComponent authUser={authUser} setAuthUser={setAuthUser} />} />
          <Route path = "/register" render = {() =><RegisterComponent newUser = {newUser} setNewUser = {setNewUser}/>}/>
          <Route path = "/users" render = {() => <UserComponent authUser = {authUser}/>}/>
          <Route path = "/user/update" render = {() =><UpdateUserComponent updateUser = {updateUser} setUpdateUser = {setUpdateUser}/>}/>
          <Route path = "/reimb/all" render = {() => <AllReimbComponent authUser = {authUser} allReimb = {newReimb} />}/>
          <Route path = "/reimb/status/pending" render = {() => <PendingReimbComponent authUser = {authUser} allReimb = {newReimb}  />}/>
          <Route path = "/reimb/status/approved" render = {() => <ApprovedReimbComponent authUser = {authUser} allReimb = {newReimb}  />}/>
          <Route path = "/reimb/status/denied" render = {() => <DeniedReimbComponent authUser = {authUser} allReimb = {newReimb}  />}/>
          <Route path = "/reimb/status/change" render = {() => <ChangeStatusReimbComponent authUser = {authUser} newReimb = {newReimb} setNewReimb = {setNewReimb}/>}/>
          <Route path = "/reimb" render = {()=><ReimbComponent username = {authUser?.username} newReimb = {newReimb} setNewReimb = {setNewReimb}/>} /> 
        </Switch>
      </Router>
    </>
  )
}

export default App;
