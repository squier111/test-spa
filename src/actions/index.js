import {takeLatest,  put, call, all} from 'redux-saga/effects';
import SpaService from '../services/spa-service';
const service = new SpaService();

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

const fetchItem = (item) => {
  return { type: 'FETCHED_ITEM' ,  payload: item}
};


// thunk action-creator отправки формы
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


const editsubmitForm = (spa, now, id) =>  (dispatch , getState) => {
  const getstate = getState();
  const editFull = getstate.form.simple.values;
  const iditem = id;
  const data = {
      data: now,
      email: editFull.email,
      name: editFull.name,
      notes: editFull.notes,
      order: editFull.order,
      orderid: editFull.orderID,
      phone: editFull.phone,
      position: editFull.position,
      provider: editFull.provider,
      surname: editFull.surname,
      dateToDone: editFull.dateToDone,
      status: editFull.status,
    };
    spa.updateResource(iditem, data);
    dispatch({
      type: 'EDIT_SUBMIT_FORM',
      payload: editFull
    });
};

// Sagas
const watchFetchItems = function* watchFetchItem() {
  yield takeLatest('FETCHED_ITEM', fetchItemsAsync);
}

function* fetchItemsAsync(action) {
  console.log(action.payload)
  try {
    yield put(itemsRequest());
    const data = yield call(() => {
      return service.getResource()
                    .then(res =>res);
      }
    );
    yield put(itemsLoaded(data));
  } catch (error) {
    yield put(itemsError());
  }
}

function* rootSaga() {
  yield all([
    watchFetchItems(),
  ]);
}


export {
  itemsLoaded,
  submitForm,
  itemsError,
  itemsRequest,
  orderID,
  itemData,
  editsubmitForm,
  clearItemData,
  fetchItemsAsync,
  fetchItem,
  rootSaga
};