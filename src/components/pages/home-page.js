import React from 'react';
import {Link} from 'react-router-dom'

const HomePage =() => {
  return <div className="home-page">
           home-page
           <Link to='/cart' className="link">Start</Link>
        </div>
}

export default HomePage;