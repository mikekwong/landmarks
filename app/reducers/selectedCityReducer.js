
import { initialState } from './index';
import axios from 'axios';

import {
  RECEIVED_CAT,
  ADD_CAT,
} from './actions'

// action creators
export const receiveCat = cat => ({ type: RECEIVED_CAT, payload: cat });


// thunks
export const fetchCat = (id) => async dispatch => {
  const response = await axios.get(`/api/cats/${id}`);
  const catData = response.data;
  dispatch(receiveCat(catData));
};

const selectedCatReducer = (cat = initialState.selectedCat, action) => {
  switch (action.type) {

    case RECEIVED_CAT:
      return action.payload.id
    default:
      return cat
  }
};

export default selectedCatReducer;
