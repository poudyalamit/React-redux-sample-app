import { combineReducers } from 'redux';
import amountReducer from "./amountreducer";

 const reducers= combineReducers({
    amount: amountReducer
})
export default reducers