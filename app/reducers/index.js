import { combineReducers } from 'redux';
import itemReducer from './items';

export default combineReducers({
  item: itemReducer
})
