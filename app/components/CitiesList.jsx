import React, { Component, Fragment } from 'react'
import CitiesListItem from './CitiesListItem.jsx'
import { fetchCities } from '../reducers/citiesReducer'
import { connect } from 'react-redux'

export const CitiesList = ({ cities }) => (
  <Fragment>
    <h1>Cities</h1>
    {cities.map(city => (
      <CitiesListItem key={city.id} name={city.name} imageURL={city.imageURL} />
    ))}
  </Fragment>
)

class CitiesListContainer extends Component {
  componentDidMount () {
    this.props.fetchCities()
  }

  render () {
    return <CitiesList cities={this.props.cities} />
  }
}

const mapStateToProps = ({ cities }) => ({
  cities
})

const mapDispatchToProps = { fetchCities }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesListContainer)
