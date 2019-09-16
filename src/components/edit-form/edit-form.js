import React , {Component} from 'react';
import { connect } from 'react-redux';
import {editsubmitForm} from '../../actions';
import { Field, reduxForm } from 'redux-form';
import './edit-form.css';
import WithSpaService from '../hoc';
import moment from 'moment';



class EditForm extends Component {
  
    onSubmit =(e) => {
      e.preventDefault();
      const now = moment().format('L');
      const spa = this.props.WithSpaService;
      const id = this.props.id;
      this.props.editsubmitForm(spa, now, id);
      this.props.closeModal();
    }
  
    render () {
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
            <Field name="order" component="select" placeholder="choose your type">
              <option value="retail">retail</option>
              <option value="wholesale">wholesale</option>
            </Field>
          </div>
          <div className="form-row">
            <label>Provider</label>
            <Field name="provider" component="select"  placeholder="choose your provider">
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
          <button type="submit">Save</button>
        </div>
      </form>
      )
    }
  }
  

  const mapStateToProps = (state) => {
    return {
      initialValues: state.reducer.itemdata
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      editsubmitForm: (spa, now, id) => {
        dispatch(editsubmitForm(spa, now, id));
      },
    }
  }


  export default WithSpaService()(
  connect(mapStateToProps, mapDispatchToProps)( 
  reduxForm({
    form: 'simple',
  })
  (EditForm)));

