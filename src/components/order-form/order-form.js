import React , {Component} from 'react';
import { connect } from 'react-redux';
import {submitForm , orderID} from '../../actions';
import {renderField , validate} from '../validation';
import WithSpaService from '../hoc';
import { Field, reduxForm, reset } from 'redux-form';
import './order-form.css';
import moment from 'moment';
import {Link} from 'react-router-dom'

class OrderForm extends Component {
  state = {
    orderID: '',

  }

  componentDidMount() {
    // const {WithSpaService} = this.props;
    // WithSpaService.getResource()
    // .then((data)=>{
    //     this.SetOrderID(data)
    // })
    // .catch((err)=> console.log(err));
  }

  SetOrderID = (data) => {  
    const yearMonth = moment().format("YYMM");
    this.setState({
      orderID:`${yearMonth}${data.length + 1}`
    })
  }

  OrderChange = (e) => {
    this.setState((state) =>{
      let currentOrderID = null;
      if (e.target.value == 'choose your order') {
        return {
          orderID:`${state.orderID.split('-')[1].replace(/[-]/g, '')}`
        }
      }
      if (state.orderID.indexOf('-') > -1) {
        currentOrderID = state.orderID.split('-')[1]
      } else {
        currentOrderID = state.orderID
      }
      return {
        orderID:`${e.target.value.charAt(0)}-${currentOrderID}`
      }
    })
  }




  

  handleSubmit =() => {
    const spa = this.props.WithSpaService;
    const now = moment().format('L');
    const orderID = this.state.orderID;
    this.props.onSubmit(spa, now, orderID);
  }

  render () {
    const now = moment().format('L');
    const { error , pristine, submitting, handleSubmit } = this.props;
    return (
    <form className="order-form"
          onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
      <h2>Order {this.state.orderID} from {now}</h2>
      <Link to='/cart' className="close-btn" onClick={this.closeModal}><i className="fa fa-times-circle-o" aria-hidden="true"></i></Link>
      <div className="form-part">
        <h3>Customer</h3>
        <div className="form-row">
          <label>Email</label>
            <Field
              name="email"
              component={renderField}
              type="email"
              placeholder="Email"
              />
        </div>
        <div className="form-row">
          <label>Name</label>
          <Field
            name="name"
            component={renderField}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="form-row">
          <label>Surname</label>
          <Field
            name="surname"
            type="text"
            component={renderField}
            placeholder="Surname"
          />
        </div>
        <div className="form-row">
          <label>Phone</label>
          <Field
            name="phone"
            component={renderField}
            type="text"
            placeholder="Phone"
          />
        </div>
      </div>
      <div className="form-part">
        <h3>Order</h3>
        <div className="form-row">
          <label>Position</label>
          <Field
            name="position"
            component={renderField}
            type="text"
            placeholder="Position"
          />
        </div>
        <div className="form-row">
          <label>Type of order</label>
          <Field name="order" component="select" onChange = {this.OrderChange.bind(this)}  placeholder="choose your type">
            <option value='choose your order'>choose your order</option>
            <option value="retail">retail</option>
            <option value="wholesale">wholesale</option>
          </Field>
        </div>
        <div className="form-row">
          <label>Provider</label>
          <Field name="provider" component="select"  placeholder="choose your provider">
          <option value="choose your provider">choose your provider</option>
            <option value="needMeat">NeedMeat</option>
            <option value="bunnyForMoney">BunnyForMoney</option>
          </Field>
        </div>
        <div className="form-row">
          <label>order ID</label>
          <Field
            name="orderid"
            component="input"
            type="text"
            component={props => {
              return (
                <input
                  type="text"
                  disabled="disabled"
                  value= {this.state.orderID}
                  {...props}
                />
              );
            }}
          />
        </div>
        <div className="form-row">
            <label>date</label>
            <Field
              name="dateToDone"
              className="form-control"
              component="input"
              type="date"
            />
          </div>
        <div className="form-row">
          <label>Notes</label>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      {error && <strong>{error}</strong>}
      <div className="form-row-submit">
        <button type="submit" disabled={pristine || submitting}>Save</button>
      </div>
    </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems:state.reducer.cartItems,
    order: state.form.simple && state.form.simple.values && state.form.simple.values.order
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (spa, now, orderID) => {
      dispatch(submitForm(spa, now, orderID));
      dispatch(reset('simple'));
    }
  }
}

export default WithSpaService()
(reduxForm({
  form: 'simple',
  validate
})
(connect(mapStateToProps, mapDispatchToProps)(OrderForm)
));
