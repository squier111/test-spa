import {createStore, applyMiddleware ,  compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as reduxFormReducer } from 'redux-form';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();



const reducers = combineReducers({
    form: reduxFormReducer,
    reducer: reducer // mounted under "form"
  });


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware , thunkMiddleware)));

sagaMiddleware.run(rootSaga);

console.info("Saga middleware implemented")

export default store;