import { combineReducers } from 'redux';
import getCatalogReducer from './getCatalogReducer.js';

var rootReducer = combineReducers({
  catalog: getCatalogReducer,
});

export default rootReducer;