import React , {Component} from 'react';
import { connect } from 'react-redux';
import {submitForm , nameForm, emailForm} from '../../actions';
import WithSpaService from '../hoc'

class OrderPage extends Component {

  onLabelChangeMail =(e) => {
    this.props.emailForm(e.target.value);
  }
  onLabelChangeName = (e) => {
    this.props.nameForm(e.target.value);
  }


  onSubmit =(e) => {
    e.preventDefault();
    // this.props.WithSpaService.postResource(newItem);
    this.props.onSubmit();


  }

  render () {
    return (
    <form className="order-page" onSubmit ={this.onSubmit}>
        <div>
          <h3>Заказчик</h3>
          <div className="row">
            <input type="text" placeholder="E-mail" value ={this.props.emailForm()}  onChange={this.onLabelChangeMail}  />
          </div>
          <div className="row">
            <input type="text" placeholder="Name" value={this.props.nameForm()} onChange={this.onLabelChangeName}  />
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

const mapStateToProps = () => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => {
      dispatch(submitForm());
    },
    nameForm: (name) => {
      dispatch(nameForm(name));
    },
    emailForm: (mail) => {
      dispatch(emailForm(mail));
    },
  }
}


export default WithSpaService()(connect(mapStateToProps, mapDispatchToProps)(OrderPage));
