import React , {Component} from 'react';
import { connect } from 'react-redux';
import {submitForm , itemsRequest, itemsError} from '../../actions';
import WithSpaService from '../hoc';
import {reset} from 'redux-form';
import { Field, reduxForm } from 'redux-form';
import './order-page.css';

class OrderPage extends Component {

  onSubmit =(e) => {
    e.preventDefault();
    const spa = this.props.WithSpaService;
    this.props.onSubmit(spa);
  }

  render () {
    const { handleSubmit, pristine, submitting, reset } = this.props;
    return (
    <form className="order-form" onSubmit={this.onSubmit}>
      <div className="form-part">
        <h3>Customer</h3>
        <div className="form-row">
          <label>Email</label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
              />
        </div>
        <div className="form-row">
          <label>Name</label>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="form-row">
          <label>Surname</label>
          <Field
            name="surname"
            component="input"
            type="text"
            placeholder="Surname"
          />
        </div>
        <div className="form-row">
          <label>Phone</label>
          <Field
            name="phone"
            component="input"
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
            component="input"
            type="text"
            placeholder="Position"
          />
        </div>
        <div className="form-row">
          <label>Type of order</label>
          <Field name="order" component="select"  placeholder="choose your type">
            <option value='choose your type'>choose your type</option>
            <option value="retail">retail</option>
            <option value="wholesale">wholesale</option>
          </Field>
        </div>
        <div className="form-row">
          <label>Provider</label>
          <Field name="provider" component="select"  placeholder="choose your provider">
            <option value='choose your provider'>choose your provider</option>
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
            placeholder="order Id"
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
      <div className="form-row-submit">
        <button type="submit" disabled={pristine || submitting}>Save</button>
      </div>
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
      dispatch(reset('simple'));
    },
  }
}

export default WithSpaService()
(reduxForm({
  form: 'simple',
})
(connect(mapStateToProps, mapDispatchToProps)(OrderPage)
));
