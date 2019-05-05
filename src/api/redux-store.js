import { createStore } from 'redux'
import MainReducer from './src/reducers/main-reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

store = createStore(MainReducer, applyMiddleware(thunk));

export default store;