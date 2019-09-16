import React from 'react';

export const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 2) {
      errors.name = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.phone) {
      errors.phone = 'Required'
    } else if (!/^[\+][(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.phone)) {
      errors.phone = 'Invalid phone'
    }
    if (!values.surname) {
        errors.surname = 'Required'
      } else if (values.surname.length < 2) {
        errors.surname = 'Minimum be 2 characters or more'
    }
    if (!values.position) {
      errors.position = 'Required'
    } else if (values.position.length < 2) {
      errors.position = 'Minimum be 2 characters or more'
    }
    return errors
  }
  
export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
<div className="holder">
    <input {...input} placeholder={label} type={type}/>
    {touched && ((error && <span> <i className="fa fa-exclamation-circle" aria-hidden="true"></i> {error}</span>) || (warning && <span> <i className="fa fa-exclamation-circle" aria-hidden="true"></i>  {warning}</span>))}
</div>
)