import React from 'react';
import {Link} from 'react-router-dom'

const buttonHolderStyle = {
  display: 'flex',
  minHeight: '500px',
  justifyContent: 'center',
  alignItems: "center",
}

const buttonStyle = {
  color: '#fff',
  display: 'inline-block',
  verticalAlign: 'top',
  background: '#5252d4',
  borderRadius: "30px",
  minWidth: '200px',
  paddingTop: '7px',
  height: '40px',
  textAlign:'center',
  textDecoration:'none',
}


const HomePage =() => {
  return <div className="home-page">
           <div style={buttonHolderStyle}> 
              <Link style ={buttonStyle} to='/cart' className="link">Start</Link>
           </div>
        </div>
}

export default HomePage;