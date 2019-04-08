import React , {Component}  from 'react';
import {connect} from 'react-redux';
import './order-table.css';


class OrderTable extends Component {


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


export default connect(mapStateToProps)(OrderTable);
