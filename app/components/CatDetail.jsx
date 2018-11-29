import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCat } from '../reducers/selectedCityReducer'
import EditCat from './EditCat'

class CatDetail extends Component {
  componentDidMount () {
    this.props.fetchCat(this.props.match.params.id)
  }

  render () {
    return (
      <div>
        <h3>{this.props.cat.name || ''}</h3>
        <img
          src={this.props.cat.imageURL || ''}
          style={{ maxWidth: '150px' }}
        />
        <ul>
          {this.props.cat &&
            this.props.cat.toys &&
            this.props.cat.toys.map(toy => <li>{toy.name}</li>)}
        </ul>
        <EditCat
          name={this.props.cat.name || ''}
          imageURL={this.props.cat.imageURL || ''}
        />
      </div>
    )
  }
}

const mapState = state => {
  return {
    cat: state.cats.length > 0
      ? state.cats.filter(cat => cat.id === state.selectedCat)[0]
      : {}
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCat: id => dispatch(fetchCat(id))
  }
}

export default connect(mapState, mapDispatch)(CatDetail)
