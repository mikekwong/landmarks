// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'
import landmarksReducer from './landmarksReducer'

export const initialState = {
  cities: [],
  landmarks: []
}

const rootReducer = combineReducers({
  cities: citiesReducer,
  landmarks: landmarksReducer
})

export default rootReducer
