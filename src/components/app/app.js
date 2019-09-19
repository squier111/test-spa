import React, {Component} from 'react'
import './app.css'
import Header from '../shop-header';
import {HomePage , OrderPage , CartPage } from '../pages';
import {Route, Switch} from 'react-router-dom';

class App extends Component {

  

  render() {
    return (
      <div className="wrapper">
          <Header/>
          <div className="router">
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
      </div>
    )
  }
}


export default App;
