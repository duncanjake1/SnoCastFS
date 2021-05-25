import React, { useState } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Snowfall from 'react-snowfall'
import axios from 'axios'

import { GetCastContext } from './components/GetCastContext.jsx'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import GetCast from './components/GetCast.jsx'
import About from './components/About.jsx'
import Donate from './components/Donate.jsx'
import ContactUs from './components/ContactUs.jsx'
import ReportIssue from './components/ReportIssue.jsx'
import PageNotFound from './components/PageNotFound.jsx'

function App() {

  axios.defaults.xsrfCookieName = 'csrftoken'
  axios.defaults.xsrfHeaderName = 'X-CSRFToken'

  const [castInfoConditions, setCastInfoConditions] = useState({})

  return (
    <div className="App">
      <Snowfall style={{zIndex: -1}}/>
      <div className="page-template-grid">
        <BrowserRouter>
        <Route path="/" component={Header} />
          <Switch>

            <Route path="/" exact>
              <GetCastContext.Provider value={{castInfoConditions, setCastInfoConditions}}> 
                <Main />
              </GetCastContext.Provider>
            </Route>

            <Route path="/getCast" exact>
              <GetCastContext.Provider value={{castInfoConditions, setCastInfoConditions}}> 
                <GetCast />
              </GetCastContext.Provider>
            </Route>
            <Route path="/about" exact component={About} />
            <Route path="/donate" exact component={Donate} />
            <Route path="/contact" exact component={ContactUs} />
            <Route path="/report" exact component={ReportIssue} />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
  </div>
  );
}

export default App;
