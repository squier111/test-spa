import React from 'react'
import './app.css'
import Header from '../shop-header';
import {HomePage , OrderPage , CartPage } from '../pages';

import {Route, Switch} from 'react-router-dom';


const App = () => {
  return (
    <div className="wrapper">
        <Header/>
        <Switch>
          <Route
            path='/'
            component ={HomePage}
            exact
            />
          <Route
            path='/cart'
            component ={CartPage}
            exact
            />
          <Route
            path='/order'
            component ={OrderPage}
            exact
            />
        </Switch>
    </div>
  )
}

export default App; 


