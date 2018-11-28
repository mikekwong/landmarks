import { initialState } from './index';
import axios from 'axios';

import {
  RECEIVED_CAT,
  RECEIVED_CATS,
  REMOVE_CAT,
  ADD_CAT,
} from './actions'

// action creators
export const receiveCats = cats => ({ type: RECEIVED_CATS, payload: cats });

export const receiveCat = cat => ({ type: RECEIVED_CAT, payload: cat });

export const removeCat = cat => ({ type: REMOVE_CAT, payload: cat });


// thunks
export const fetchCats = () => async dispatch => {
  const response = await axios.get('/api/cats');
  const catsData = response.data;
  dispatch(receiveCats(catsData));
};

export const makeCat = (cat) => async dispatch => {
  const response = await axios.post('/api/cats', cat);
  const catData = response.data;
  dispatch(receiveCat(catData));
};

export const editCat = (cat, id) => async dispatch => {
  const response = await axios.put(`/api/cats/${id}`, cat);
  const catData = response.data;
  dispatch(receiveCat(catData));
};

export const destroyCat = (id) => async dispatch => {
  const response = await axios.delete(`/api/cats/${id}`);
  const catData = response.data;
  dispatch(removeCat(catData));
};

const catsReducer = (cats = initialState.cats, action) => {
  switch (action.type) {
    case RECEIVED_CATS:
      return action.payload;
    case RECEIVED_CAT:
      return [...cats.filter(cat => cat.id !== action.payload.id), action.payload];
    case REMOVE_CAT:
      return [...cats.filter(cat => cat.id !== action.payload.id)]
    default:
      return cats;
  }
};

export default catsReducer;
