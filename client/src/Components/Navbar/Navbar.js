import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

function navHamburger() {
  let navbar = document.getElementById("myNav");
  if (navbar.className === 'nav') {
    navbar.className += ' responsive';
  } else {
    navbar.className = 'nav';
  }
}


class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav" id="myNav">
        <NavLink to="/" className="nav-brand"><span className="nav-span">LIFE</span>Sports</NavLink>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/exercises" activeClassName="nav-active" className="nav-link">Exercises</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/create" activeClassName="nav-active" className="nav-link">New Workout</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/user" activeClassName="nav-active" className="nav-link">Create User</NavLink>
          </li>
        </ul>
        <a href="javascript:void(0);" className="nav-icon" onClick={navHamburger}><FontAwesomeIcon icon={faBars} className="nav-icon" /></a>
      </nav>
    );
  }
}
export default Navbar;