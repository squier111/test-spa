import React , {Component} from 'react';
import { connect } from 'react-redux';

class OrderPage extends Component {



  onLabelChangeMail =(e) =>{
    console.log(e.target.value);
  }
  onLabelChangeName = (e) => {
    console.log(e.target.value);
  }


  onSubmit =(e) => {
    e.preventDefault();

  }

  render () {
    return (
    <form className="order-page" onSubmit ={this.onSubmit}>
        <div>
          <h3>Заказчик</h3>
          <div className="row">
            <input type="text" placeholder="E-mail" onChange={this.onLabelChangeMail}/>
          </div>
          <div className="row">
            <input type="text" placeholder="Name" onChange={this.onLabelChangeName}/>
          </div>
          <div className="row">
            <input type="text" placeholder="Surname" />
          </div>
          <div className="row">
            <input type="text" placeholder="phone" />
          </div>
        </div>
        <div>
          <h3>Заказ</h3>
          <div className="row">
            <input type="text" placeholder="Position" />
          </div>
          <div className="row">
            <select>
              <option>Розница</option>
              <option>Опт</option>
            </select>
          </div>
          <div className="row">
            <select>
              <option>ООО Васины штуки</option>
              <option>ООО Петин Рошен</option>
            </select>
          </div>
          <div className="row">
            <input type="text" placeholder="Order ID" />
          </div>
          <div className="row">
            <input type="text" placeholder="Date" />
          </div>
          <div className="row">
            <textarea placeholder="Comment"></textarea>
          </div>
        </div>
        <button type="submit">Save</button>
    </form>
    )
  }
}



export default (connect()(OrderPage));