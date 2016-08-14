import { combineReducers } from 'redux';
import notationReducer from './notation_reducer';

const rootReducer = combineReducers({
  notation: notationReducer
});

export default rootReducer;