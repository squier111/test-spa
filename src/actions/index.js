

const itemsLoaded = (newitems) => {
  return {
    type: 'FETCH_ITEMS_SUCCESS',
    payload: newitems,
  };
};

const itemsRequest = () => {
  return {
    type: 'FETCH_ITEMS_REQUESTED',
  };
};

const itemsError = () => {
  return {
    type: 'FETCH_ITEMS_ERROR',
  };
};

//action-creator отправки формы

const submitForm = (spa) =>  (dispatch , getState) => {
    const getstate = getState();
    const full = getstate.form.simple.values;
    console.log(full);
  const data = {
      email: full.email,
      name: full.name,
      notes: full.notes,
      order: full.order,
      orderid: full.orderid,
      phone: full.phone,
      position: full.position,
      provider: full.provider,
      surname: full.surname,
      dateToDone: full.dateToDone,
      status: 'done',
    };
    spa.postResource(data);
  dispatch({
    type: 'SUBMIT_FORM'
  });
};


export {
  itemsLoaded,
  submitForm,
  itemsError,
  itemsRequest
};