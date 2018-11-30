import React, { Component, Fragment } from 'react'
import LandmarksListItem from './LandmarksListItem.jsx'
import { fetchLandmarks } from '../reducers/landmarksReducer'
import { connect } from 'react-redux'

export const LandmarksList = ({ landmarks }) => (
  <Fragment>
    <h1>Landmarks</h1>
    {landmarks.map(landmark => (
      <LandmarksListItem
        key={landmark.id}
        name={landmark.name}
        imageURL={landmark.imageURL}
      />
    ))}
  </Fragment>
)

class LandmarksListContainer extends Component {
  componentDidMount () {
    this.props.fetchLandmarks()
  }

  render () {
    return <LandmarksList landmarks={this.props.landmarks} />
  }
}

const mapStateToProps = ({ landmarks }) => ({
  landmarks
})

const mapDispatchToProps = { fetchLandmarks }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandmarksListContainer)
