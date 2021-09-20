import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'

import records from './records';

const rootReducer = combineReducers({
  records: records,
  toastr: toastrReducer,
});

export default rootReducer;
