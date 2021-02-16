import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';

import '../static/Sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="heading">
        <h2>Applance</h2>
      </div>
      <div className="links">
        <div className="link">
          <HomeIcon className="bar__icon" />
          <p className="link__text">Rentals</p>
        </div>
        <div className="link">
          <HomeIcon className="bar__icon" />
          <Link to="/properties" className="link__text">Properties</Link>
        </div>
      </div>
      <div className="footer">
        <p>321321eqw</p>
      </div>
    </div>
  )
}

export default Sidebar
