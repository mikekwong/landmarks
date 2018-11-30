// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'

export const initialState = {
  cities: []
}

const rootReducer = combineReducers({
  cities: citiesReducer
})

export default rootReducer
