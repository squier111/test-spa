import React from 'react';
import './shop-header.css';
import {Link} from 'react-router-dom'
const Header =() => {
  return <div className="header">
           <ul className="header-list">
              <li>
                <Link to='/' className="link">ReStore</Link>
              </li>
              <li>
                <Link to='/cart' className="link">Zakazi</Link>
              </li>
              <li>
                <Link to='/order' className="link">Novij zakaz</Link>
              </li>
           </ul>
        </div>
}

export default Header;