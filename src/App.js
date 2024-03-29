import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import About from "./components/pages/About";
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound"

const App = () => {

  
    return (

      <GithubState>
        <AlertState>
  <Router>
        <div className='App'>
          <Navbar title='Github Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert></Alert>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/user/:login' component={User}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>
      
    );
    
}

export default App;
