import {createStore, applyMiddleware ,  compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// const myAction = (dispatch) => {
//   setTimeout(()=> dispatch({
//     type:'DELAYED_ACTION'
//   }),2000);
// };

// store.dispatch(myAction);

export default store;