/* eslint-disable import/extensions */
import { combineReducers } from 'redux';
import getCatalogReducer from './getCatalogReducer.js';
import getUserReducer from './getUserReducer.js';

const rootReducer = combineReducers({
  catalog: getCatalogReducer,
  user: getUserReducer,
});

export default rootReducer;
