import React, { Fragment } from 'react'

const CitiesListItem = ({ name, imageURL }) => (
  <Fragment>
    <h3>{name}</h3>
    <img src={imageURL} style={{ maxWidth: '150px' }} />
  </Fragment>
)

export default CitiesListItem
