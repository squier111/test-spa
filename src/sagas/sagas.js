import {takeLatest,  put, call, all, select} from 'redux-saga/effects';
import SpaService from '../services/spa-service';
import {
    itemsLoaded,
    submitForm,
    itemsError,
    itemsRequest,
    editsubmitForm
 } from '../actions'


const service = new SpaService();

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

export default rootSaga;
