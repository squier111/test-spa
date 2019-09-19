import React, {Component} from 'react';
import OrderTable from '../order-table';
import WithSpaService from '../hoc';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {fetchItem} from '../../actions';

class CartPage extends Component {

  componentDidMount() {
    this.props.fetchItem("bar");
  }

  render() {
    const {loading, error} = this.props;

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
    loading: state.reducer.loading,
    error: state.reducer.error,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (item) => {
      dispatch(fetchItem(item));
    }
  };
}

export default WithSpaService()(connect(mapStateToProps, mapDispatchToProps)(CartPage));
