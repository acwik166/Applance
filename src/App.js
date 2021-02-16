import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Signup from './routes/Signup';

import './static/App.scss';

const App = () => {
  return (
    <AuthProvider>
      <div className='app'>
        <Router>
          <Switch>
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App;
