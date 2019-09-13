import {createStore, applyMiddleware ,  compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as reduxFormReducer } from 'redux-form';
import reducer from './reducers'

const reducers = combineReducers({
    form: reduxFormReducer,
    reducer: reducer // mounted under "form"
  });


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;