const itemsLoaded = (newitems) => {
  return {
    type: 'FETCH_ITEMS_SUCCESS',
    payload: newitems,
  };
};

const nameForm =(customer) => {
  return {
    type: 'FETCH_NAME_FORM',
    payload: customer,
  }
}
const emailForm =(mail) => {
  return {
    type: 'FETCH_EMAIL_FORM',
    payload: mail,
  }
}


//action-creator отправки формы

const submitForm = () => async (dispatch , getState) => {
  try {
    const { newItem: { customer, email } } = getState();
    const data = {
        customer: customer,
        email: email
      };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const response = await fetch('http://localhost:3000/orderInfo', options);
    dispatch({
      type: 'SUBMIT_FORM'
    });
  
  } catch (err) {
    throw new Error(`could not fetchу ${err}`)
    // обработка ошибки
  
  }
  finally {
 }
  

};



// const submitForm =() => {
//   return {
//     type: 'SUBMIT_FORM',
//   }
// }

export {
  itemsLoaded,
  submitForm,
  nameForm,
  emailForm
};