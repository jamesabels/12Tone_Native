import { combineReducers } from 'redux';

// Import reducers
import notationReducer from './notation_reducer';
import synthReducer from './synth_reducer';

const rootReducer = combineReducers({
  notation: notationReducer,
  synth: synthReducer
});

export default rootReducer;