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
import ReimbIdComponent from './components/ReimbIdComponent';
import DeleteComponent from './components/DeleteTargetUser';
import ReimbDetailsComponent from './components/DetailReimbComponent';
import UpdateRimbComponent from './components/UpdateReimbComponent';
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
  //@ts-ignore
  const [deleteUser, setDeleteUser] = useState(null as Users)
  const [thisReimb, setThisReimb] = useState(new Reimbursements(0,0,'','','',0,0,'',''));
  

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
          <Route exact path = "/users" render = {() => <UserComponent authUser = {authUser} setNewUser = {setNewUser}/>}/>


          <Route exact path = "/users/delete" render = {() => <DeleteComponent authUser = {authUser} setDeleteUser = {setDeleteUser}/>}/>
          <Route path = "/user/update" render = {() =><UpdateUserComponent updateUser = {updateUser} setUpdateUser = {setUpdateUser}/>}/>
          <Route path = "/reimb/all" render = {() => <AllReimbComponent authUser = {authUser} setThisReimb = {setThisReimb}  />}/>
          <Route path = "/reimb/id" render = {() => <ReimbIdComponent authUser = {authUser} setThisReimb = {setThisReimb}  />}/>
          <Route path = "/reimb/status/pending" render = {() => <PendingReimbComponent authUser = {authUser}  setThisReimb = {setThisReimb}/>}/>
          <Route path = "/reimb/status/approved" render = {() => <ApprovedReimbComponent authUser = {authUser}  setThisReimb = {setThisReimb} />}/>
          <Route path = "/reimb/status/denied" render = {() => <DeniedReimbComponent authUser = {authUser} setThisReimb = {setThisReimb}   />}/>
          <Route path = "/reimb/update" render = {() =><UpdateRimbComponent authUser = {authUser} setNewReimb = {setNewReimb}/>}/>
          <Route path = "/reimb" render = {()=><ReimbComponent authUser = {authUser} newReimb = {newReimb} setNewReimb = {setNewReimb}/>} /> 
          <Route path = {`/details-${thisReimb.reimb_id}`} render = {() => <ReimbDetailsComponent authUser = {authUser} thisReimb = {thisReimb}/>}/>
      </Switch>

    </Router>
    </>
  );
}

export default App;

