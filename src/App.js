import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Sidebar from './components/Sidebar'
import Signup from './routes/Signup'
import Login from './routes/Login'
import Properties from './routes/Properties'
import PropertyDetail from './routes/PropertyDetail'

import './static/App.scss'

function App () {
  const { currentUser } = useAuth();
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
          <Sidebar />
          <Switch>
            <Route exact path="/properties" component={Properties} />
            <Route exact path="/property/:id" component={PropertyDetail} />
          </Switch>
        </Router>
    }
    </div>
  )
}

export default App
