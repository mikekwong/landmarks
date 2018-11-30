import { initialState } from './index'
import axios from 'axios'

const ADD_LANDMARK = 'ADD_LANDMARK'
const RECEIVED_LANDMARKS = 'RECEIVED_LANDMARKS'

// action creator
export const receiveLandmarks = landmarks => ({
  type: RECEIVED_LANDMARKS,
  payload: landmarks
})

// thunks
export const fetchLandmarks = () => async dispatch => {
  const res = await axios('/api/landmarks')
  const landmarksData = res.data
  dispatch(receiveLandmarks(landmarksData))
}

const landmarkReducer = (landmarks = initialState.landmarks, action) => {
  switch (action.type) {
    case RECEIVED_LANDMARKS:
      return action.payload
    case ADD_LANDMARK:
      return [...landmarks, action.payload]
    default:
      return landmarks
  }
}

export default landmarkReducer
