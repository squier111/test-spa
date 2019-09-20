import {takeLatest,  put, call, all, select} from 'redux-saga/effects';
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



// Sagas
const watchFetchItems = function* watchFetchItem() {
  yield takeLatest('FETCHED_ITEM', fetchItemsAsync);
}

const watchFetchSubmit = function* watchFetchSubmit() {
  yield takeLatest('FETCHED_SUBMIT', fetchSubmitAsync);
}

const watchFetchEditSubmit = function* watchFetchEditSubmit() {
  yield takeLatest('FETCHED_EDIT_SUBMIT', fetchEditSubmitAsync);
}

function* fetchItemsAsync() {
  const state = yield select();
  console.log(state)
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

function* fetchSubmitAsync(action) {
  const getstate = yield select();
  console.log(action.payload);
  const full = getstate.form.simple.values;
  const data = {
      ...full,
      data: action.payload.now,
      orderid: action.payload.orderID,
      status: 'done',
  };
  try {
    yield call(() => {
      return service.postResource(data)
      }
    );
    yield put(submitForm());
  } catch (error) {
    yield put(itemsError(error));
  }
}

function* fetchEditSubmitAsync(action) {
  const getstate = yield select();
  console.log(action.payload);
  const editFull = getstate.form.simple.values;
  const iditem = action.payload.id;
  const data = {
      ...editFull,
      data: action.payload.now,
  };
  try {
    yield call(() => {
      return service.updateResource(iditem, data);
      }
    );
    yield put(editsubmitForm(editFull));
  } catch (error) {
    yield put(itemsError(error));
  }
}

function* rootSaga() {
  yield all([
    watchFetchItems(),
    watchFetchSubmit(),
    watchFetchEditSubmit()
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
  fetchSubmit,
  fetchEditSubmit,
  rootSaga,
};