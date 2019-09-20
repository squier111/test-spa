import React , {Component} from 'react';
import { connect } from 'react-redux';
import {fetchEditSubmit} from '../../actions';
import { Field, reduxForm } from 'redux-form';
import {renderField , validate} from '../validation';
import './edit-form.css';
import WithSpaService from '../hoc';
import moment from 'moment';



class EditForm extends Component {

    handleSubmit = () => {
      const data = {};
      data.now = moment().format('L');
      data.id = this.props.id;
      this.props.fetchEditSubmit(data);
      this.props.closeModal();
    }

    render () {
      const { handleSubmit} = this.props;
      return (
      <form className="order-form" 
      onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
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
              component={renderField}
              type="text"
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
              disabled
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
      fetchEditSubmit: (data) => {
        dispatch(fetchEditSubmit(data));
      },
    }
  }


  export default WithSpaService()(
  connect(mapStateToProps, mapDispatchToProps)( 
  reduxForm({
    form: 'simple',
    validate
  })
  (EditForm)));

