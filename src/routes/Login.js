import React, { useRef, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import '../static/Login.scss'

const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailRef.current.value === '' || passwordRef.current.value === '') {
      setError('Please input values');
      return;
    };

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
      setLoading(false);
    } catch (error) {
      setError('Failed to create an account');
      setLoading(false);
    }
  }

  return (
    <div className="login">
      {loading ? 
        <CircularProgress /> : 
        <div className="login__card">
          <h1>Welcome again!</h1>
          <p>Login to Applance.</p>
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <div className="input__bar">
                <MailOutlineIcon className="bar__icon"/>
                <input type="email" name="email" placeholder="email" ref={emailRef}/>
              </div>
            </div>
            <div className="form__group">
              <label htmlFor="password">Password</label>
              <div className="input__bar">
                <LockIcon className="bar__icon"/>
                <input type="password" name="password" placeholder="password" ref={passwordRef}/>
              </div>
            </div>
            <h5 className="error">{error}</h5>
            <p>Already have an account? <Link className="link" to="/signup">Login</Link></p>
            <button type="submit">Login</button>
          </form>
        </div>
      }
    </div>
  )
}

export default Login;
