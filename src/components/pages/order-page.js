import React , {Component} from 'react';
import { connect } from 'react-redux';
import {submitForm , nameForm, emailForm} from '../../actions';
import WithSpaService from '../hoc';
import { Field, reduxForm } from 'redux-form';

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
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
      // <form className="order-page" onSubmit ={this.onSubmit}>
      //     <div>
      //       <h3>Заказчик</h3>
      //       <div className="row">
      //         <input type="text" placeholder="E-mail" value={email}  onChange={this.onLabelChangeMail} />
      //       </div>
      //       <div className="row">
      //         <input type="text" placeholder="Name" value={customer}  onChange={this.onLabelChangeName}  />
      //       </div>
      //       <div className="row">
      //         <input type="text" placeholder="Surname" />
      //       </div>
      //       <div className="row">
      //         <input type="text" placeholder="phone" />
      //       </div>
      //     </div>
      //     <div>
      //       <h3>Заказ</h3>
      //       <div className="row">
      //         <input type="text" placeholder="Position" />
      //       </div>
      //       <div className="row">
      //         <select>
      //           <option>Розница</option>
      //           <option>Опт</option>
      //         </select>
      //       </div>
      //       <div className="row">
      //         <select>
      //           <option>ООО Васины штуки</option>
      //           <option>ООО Петин Рошен</option>
      //         </select>
      //       </div>
      //       <div className="row">
      //         <input type="text" placeholder="Order ID" />
      //       </div>
      //       <div className="row">
      //         <input type="text" placeholder="Date" />
      //       </div>
      //       <div className="row">
      //         <textarea placeholder="Comment"></textarea>
      //       </div>
      //     </div>
      //     <button type="submit">Save</button>
      // </form>
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


export default WithSpaService()
(reduxForm({
  form: 'simple', // a unique identifier for this form
})
(connect(mapStateToProps, mapDispatchToProps)(OrderPage)
));
