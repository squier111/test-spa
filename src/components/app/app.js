import React, {Component} from 'react'
import './app.css'
import { connect } from 'react-redux';
import Header from '../shop-header';
import {HomePage , OrderPage , CartPage } from '../pages';

import {Route, Switch} from 'react-router-dom';

import WithSpaService from '../hoc'

import {itemsLoaded} from '../../actions';


class App extends Component {


  componentDidMount() {
    // 1. receive data
    const {WithSpaService , itemsLoaded} = this.props;

    // 2.dispatch action to store
        WithSpaService.getResource().then((data)=>{
          itemsLoaded(data);
      });
      // service
      // .then((data) => booksLoaded(data))
  }


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

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    itemsLoaded: item => {
      dispatch(itemsLoaded(item));
    },
  }
}


export default WithSpaService()(connect(mapStateToProps, mapDispatchToProps)(App));


