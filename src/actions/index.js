const itemsLoaded = (newitems) => {
  return {
    type: 'FETCH_ITEMS_SUCCESS',
    payload: newitems,
  };
};

const nameForm =(name) => {
  return {
    type: 'FETCH_NAME_FORM',
    payload: name,
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
    const { newItem: { name, email } } = getState();
    const data = {
        name: name,
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


// const submitForm = (dispatch) => {
//   return (dispatch, getState) => {
//     const
//         state = getState(),
//         newEvent = state.newEvent,
//         title = newEvent.title,
//         description = newEvent.description,
//         data = {
//             title: title,
//             description: description
//         };
//         const postResource = async (data) => {
//           const options = {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//           }
//           return await fetch(`${this._apiBase}`, options)
//             .then((response) => response.json)
//         }
//       console.log(state);   
//   }
// }




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