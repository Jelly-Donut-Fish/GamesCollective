import { combineReducers } from 'redux';
import getCatalogReducer from './getCatalogReducer';
import getGameIdReducer from './getGameIdReducer';

const rootReducer = combineReducers({
  catalog: getCatalogReducer,
  gameId: getGameIdReducer,
});

export default rootReducer;
