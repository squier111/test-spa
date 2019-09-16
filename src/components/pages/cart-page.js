import React, {Component} from 'react';
import OrderTable from '../order-table';
import WithSpaService from '../hoc';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import {itemsLoaded, itemsError, itemsRequest} from '../../actions';

class CartPage extends Component {

  componentDidMount() {
    // 1. receive data
    const {WithSpaService , itemsLoaded, itemsError, itemsRequest} = this.props;

    itemsRequest();
    // 2.dispatch action to store
    WithSpaService.getResource()
    .then((data)=>{
      itemsLoaded(data);
    })
    .catch((err)=> itemsError(err));
  }

  render() {
    const {items, loading, error} = this.props;

    if(loading) {
      return <Spinner/>
    }

    if(error) {
      return <ErrorIndicator/>
    }
    
    return <div className="card-page">
            <OrderTable/>
          </div>
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.reducer.cartItems,
    loading: state.reducer.loading,
    error: state.reducer.error,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    itemsRequest: () => {
      dispatch(itemsRequest());
    },
    itemsError: (err) => {
      dispatch(itemsError(err));
    },
    itemsLoaded: item => {
      dispatch(itemsLoaded(item));
    },
  }
}

export default WithSpaService()(connect(mapStateToProps, mapDispatchToProps)(CartPage));
