import {combineReducers} from 'redux';
import * as adReducer from './ads';
import * as catReducer from './categories';

export default combineReducers(Object.assign(
    adReducer,
    catReducer
  
));