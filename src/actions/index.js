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
const submitForm = () => {
  return (dispatch, getState) => {
      const
          state = getState(),
          newEvent = state.newEvent,
          title = newEvent.title,
          description = newEvent.description,
          data = {
              title: title,
              description: description
          };

       console.log(state);   
  }
}

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