import React , {Component}  from 'react';
import './order-table.css';


class OrderTable extends Component {
  RenderRow = (item, idx) => {
      const {id, email, name , notes, order,orderid, phone, position, provider, surname, dateToDone, status} = item;
      return (
        <tr key = {id}>
          <td>22.22.02</td>
          <td>{`${name} ${surname}`}</td>
          <td>{orderid}</td>
          <td>{order}</td>
          <td>{`${name} ${surname}`}</td>
          <td>{provider}</td>
          <td>{dateToDone}</td>
          <td>{status}</td>
        </tr>
      )
  }
  render () {
    return (
      <div className="order-table">
          <h2>Order table</h2>
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


export default OrderTable;
