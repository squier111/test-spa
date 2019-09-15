

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

const itemsError = (err) => {
  return {
    type: 'FETCH_ITEMS_ERROR',
    payload: err
  };
};

const orderID = (id) => {
  return {
    type: 'FETCH_ORDERID',
    payload: id
  };
};

//action-creator отправки формы

const submitForm = (spa, now, orderID) =>  (dispatch , getState) => {
  const getstate = getState();
  const full = getstate.form.simple.values;
  const data = {
      data: now,
      email: full.email,
      name: full.name,
      notes: full.notes,
      order: full.order,
      orderid: orderID,
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
  itemsRequest,
  orderID
};