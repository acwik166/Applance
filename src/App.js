import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Signup from './routes/Signup'
import Login from './routes/Login'

import './static/App.scss'

function App () {
  const { currentUser } = useAuth();
  console.log(currentUser)
  return (
    <div className='app'>
    {
      !currentUser ?
        <Router>
          <Switch>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Router>
      :
        <Router>
          <Switch>
          </Switch>
        </Router>
    }
    </div>
  )
}

export default App
