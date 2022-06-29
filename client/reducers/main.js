/* eslint-disable import/extensions */
import { combineReducers } from 'redux';
import getCatalogReducer from './getCatalogReducer.js';
import getUserReducer from './getUserReducer.js';
import getMyCollectionReducer from './getMyCollectionReducer.js';

const rootReducer = combineReducers({
  catalog: getCatalogReducer,
  currentUser: getUserReducer,
  myCollection: getMyCollectionReducer,
});

export default rootReducer;
