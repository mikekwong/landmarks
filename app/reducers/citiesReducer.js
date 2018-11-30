import { initialState } from './index'
import axios from 'axios'

const ADD_CITY = 'ADD_CITY'
const RECEIVED_CITIES = 'RECEIVED_CITIES'
// action creators
export const receiveCities = cities => ({
  type: RECEIVED_CITIES,
  payload: cities
})

// thunks
export const fetchCities = () => async dispatch => {
  const res = await axios.get('/api/cities')
  const citiesData = res.data
  dispatch(receiveCities(citiesData))
}

const citiesReducer = (cities = initialState.cities, action) => {
  switch (action.type) {
    case RECEIVED_CITIES:
      return action.payload
    case ADD_CITY:
      return [...cities, action.payload]
    default:
      return cities
  }
}

export default citiesReducer
