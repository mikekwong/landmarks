// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux';
import catsReducer from './catsReducer';
import selectedCatReducer from './selectedCatReducer';

export const initialState = {
  cats: [],
  selectedCat: 1
};

const rootReducer = combineReducers({
  cats: catsReducer,
  selectedCat: selectedCatReducer
});

export default rootReducer;
