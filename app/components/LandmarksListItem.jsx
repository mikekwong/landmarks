import React, { Fragment } from 'react'

const LandmarksListItem = ({ name, imageURL }) => (
  <Fragment>
    <h3>{name}</h3>
    <img src={imageURL} style={{ maxWidth: '150px' }} />
  </Fragment>
)

export default LandmarksListItem
