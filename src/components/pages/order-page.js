import React , {Component} from 'react';
import { connect } from 'react-redux';
import {submitForm , nameForm, emailForm} from '../../actions';
import WithSpaService from '../hoc'

class OrderPage extends Component {
  constructor(){
    super();
    this.state={
      customer: '',
      email: '',
    }
  }

  onLabelChangeMail =(e) => {
    this.setState({email:e.target.value})
    this.props.emailForm(this.state.email);
  }
  onLabelChangeName = (e) => {
    this.setState({customer:e.target.value})
    this.props.nameForm(this.state.customer);
  }


  onSubmit =(e) => {
    e.preventDefault();
    const spa = this.props.WithSpaService;
    this.props.onSubmit(spa);
    this.setState({
      customer: '',
      email: '',
    });

  }

  render () {
    const {customer, email} = this.state;
    return (
    <form className="order-page" onSubmit ={this.onSubmit}>
        <div>
          <h3>Заказчик</h3>
          <div className="row">
            <input type="text" placeholder="E-mail" value={email}  onChange={this.onLabelChangeMail} />
          </div>
          <div className="row">
            <input type="text" placeholder="Name" value={customer}  onChange={this.onLabelChangeName}  />
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
    onSubmit: (spa) => {
      dispatch(submitForm(spa));
    },
    nameForm: (customer) => {
      dispatch(nameForm(customer));
    },
    emailForm: (mail) => {
      dispatch(emailForm(mail));
    },
  }
}


export default WithSpaService()(connect(mapStateToProps, mapDispatchToProps)(OrderPage));
