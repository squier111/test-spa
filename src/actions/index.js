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

const itemData = (item) => {
  return {
    type: 'FETCH_ITEMDATA',
    payload: item
  };
};

const clearItemData = () => {
  return {
    type: 'CLEAR_ITEM_DATA',
  };
};

const submitForm = () => {
  return { type: 'SUBMIT_FORM'}
};

const editsubmitForm = (data) => {
  return { type: 'EDIT_SUBMIT_FORM' , payload: data}
};

const fetchItem = (item) => {
  return { type: 'FETCHED_ITEM' ,  payload: item}
};

const fetchSubmit = (data) => {
  return { type: 'FETCHED_SUBMIT' ,  payload: data}
};

const fetchEditSubmit = (data) => {
  return { type: 'FETCHED_EDIT_SUBMIT' ,  payload: data}
};


export {
  itemsLoaded,
  submitForm,
  itemsError,
  itemsRequest,
  orderID,
  itemData,
  editsubmitForm,
  clearItemData,
  fetchItem,
  fetchSubmit,
  fetchEditSubmit
};