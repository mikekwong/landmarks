// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'
import selectedCityReducer from './cityReducer'

export const initialState = {
  city: [],
  selectedCity: 1
}

const rootReducer = combineReducers({
  cities: citiesReducer,
  selectedCity: selectedCityReducer
})

export default rootReducer
