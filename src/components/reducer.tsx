import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';
import { IState } from "../components/state";
import { OrderReducer } from "../order";


const rootReducer = combineReducers({
  OrderReducer
});

export default rootReducer;