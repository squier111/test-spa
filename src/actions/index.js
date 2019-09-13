
import SpaService from '../services/spa-service'
const spa = new SpaService();

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

const submitForm = (spa) =>  (dispatch , getState) => {

  console.log(spa)
  const { newItem: { customer, email } } = getState();
  const data = {
      customer,
      email
    };
    spa.postResource(data);
  dispatch({
    type: 'SUBMIT_FORM'
  });
  // try {
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   }
  //   //await fetch('http://localhost:3000/orderInfo', options);
  
  // } catch (err) {
  //   throw new Error(`could not fetchу ${err}`)
  //   // обработка ошибки
  
  // }
};


export {
  itemsLoaded,
  submitForm,
  nameForm,
  emailForm
};