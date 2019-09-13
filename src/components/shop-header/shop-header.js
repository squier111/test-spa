import React from 'react';
import './shop-header.css';
import {NavLink} from 'react-router-dom'
const Header =() => {
  return <div className="header">
           <ul className="header-list">
              <li>
                <NavLink exact={true} to='/' className="link">Start</NavLink>
              </li>
              <li>
                <NavLink exact={true} to='/cart' className="link">Zakazi</NavLink>
              </li>
              <li>
                <NavLink exact={true} to='/order' className="link">Novij zakaz</NavLink>
              </li>
           </ul>
        </div>
}

export default Header;