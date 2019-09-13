import React , {Component}  from 'react';
import {connect} from 'react-redux';
import './order-table.css';


class OrderTable extends Component {


  RenderRow = (item, idx) => {
      const {id, date, orderId , typeOrder,customer,provider, dateDone, status} = item;
      return (
        <tr key = {id}>
          <td>{date}</td>
          <td>{customer}</td>
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
          <h2>Simple table</h2>
          <table>
            <thead>
              <tr>
                  <th>Дата</th>
                  <th>Имя</th>
                  <th>ID заказа</th>
                  <th>Тип заказа</th>
                  <th>Заказчик</th>
                  <th>Поставщик</th>
                  <th>Выполнен</th>
                  <th>Статус</th>
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
