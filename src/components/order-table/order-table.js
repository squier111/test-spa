import React , {Component}  from 'react';
import {connect} from 'react-redux';
import './order-table.css';
import WithSpaService from '../hoc'
import {itemsLoaded} from '../../actions';


class OrderTable extends Component {


  componentDidMount() {
    // 1. receive data
    const {WithSpaService , itemsLoaded} = this.props;
    // const data = bookstoreService.getBooks();
    // this.props.booksLoaded(data);
    // console.log(data);
    
        // 2.dispacth action to store

        WithSpaService.getResource().then((data)=>{
          console.log(data);
          itemsLoaded(data);
      });
      // service
      // .then((data) => booksLoaded(data))
  }

  RenderRow = (item, idx) => {
      const {id, date, orderId , typeOrder,customer,provider, dateDone, status} = item;
      return (
        <tr key = {id}>
          <td>{date}</td>
          <td>{orderId}</td>
          <td>{typeOrder}</td>
          <td>{customer}</td>
          <td>{provider}</td>
          <td>{dateDone}</td>
          <td>{status}</td>
        </tr>
      )
  }
  render () {
    return (
      <div className="order-table">
          <table>
            <thead>
              <tr>
                  <th>Simple table</th>
              </tr>
            </thead>
            <tbody>
                {this.props.items.map(this.RenderRow)}  
            </tbody>
          </table>
      </div>
    )
  }
}


const mapStateToProps = ({cartItems}) => {
  return {
    items:cartItems,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    itemsLoaded: (item) => {
      dispatch(itemsLoaded(item));
    },
  }
}

export default WithSpaService()(connect(mapStateToProps, mapDispatchToProps)(OrderTable));
