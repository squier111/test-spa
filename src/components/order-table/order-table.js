import React , {Component}  from 'react';
import './order-table.css';
import moment from 'moment';
import Modal from 'react-modal';


class OrderTable extends Component {
  state = {
    modalIsOpen: false,
  }
  RenderStatus = (status) => {
    return (
      <span className={status}>{status}</span>
    )
  }

  RenderEditBtn = () => {
    return (
      <button onClick = {this.HandleEdit.bind(this)} className="edit-btn">Edit</button>
    )
  }

  HandleEdit = (e) => {
    this.setState({modalIsOpen: true});
    console.log(e.target);
  }

  closeModal =() => {
    this.setState({modalIsOpen: false});
  }


  RenderRow = (item, idx) => {
      const {id, data, email, name , notes, order,orderid, phone, position, provider, surname, dateToDone} = item;
      let status = null;
      if (moment(data).unix() > moment(dateToDone).unix()) {
        status = this.RenderStatus('done')
      }
      else {
        status = this.RenderStatus('confirm')
      }


      const formatDateToDone = moment(dateToDone).format('L');
      const DateToDoneSubtract = moment(formatDateToDone).subtract(3 , 'days').unix();
      let editBtn = null;
      if (moment().unix() < DateToDoneSubtract) {
        editBtn = this.RenderEditBtn();
      } else {
        editBtn = null;
      }

      return (
        <tr key = {id}>
          <td>{data}</td>
          <td>{`${name} ${surname}`}</td>
          <td>{orderid}</td>
          <td>{order}</td>
          <td>{`${name} ${surname}`}</td>
          <td>{provider}</td>
          <td>{moment(dateToDone).format('L')}</td>
          <td>{status}</td>
          <td>{editBtn}</td>
        </tr>
      )
  }
  render () {
    return (
      <div className="order-table">
          <h2>Order table</h2>
          <div className="table-holder">
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
                    <th></th>
                </tr>
              </thead>
              <tbody>
                  {this.props.items.map(this.RenderRow)}  
              </tbody>
            </table>
          </div>
          <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal.bind(this)}
              contentLabel="Example Modal"
            >

              <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
          </Modal>
      </div>
    )
  }
}


export default OrderTable;
