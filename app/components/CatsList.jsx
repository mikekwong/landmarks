import React, { Component, Fragment } from 'react'
import CatsListItem from './CatsListItem.jsx'
import NewCat from './NewCat.jsx'
import { fetchCats, destroyCat } from '../reducers/citiesReducer'
import { connect } from 'react-redux'

export const CatsList = ({ handleClick, cats }) => (
  <Fragment>
    <h1>Cats</h1>
    {cats.map(cat => (
      <CatsListItem key={cat.id} handleClick={handleClick} {...cat} />
    ))}
  </Fragment>
)

class CatsListContainer extends Component {
  componentDidMount () {
    this.props.fetchCats()
  }

  handleClick (id) {
    this.props.destroyCat(id)
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <CatsList
          cats={this.props.cats}
          handleClick={this.handleClick.bind(this)}
        />
        <NewCat />
      </div>
    )
  }
}

const mapStateToProps = ({ cats }) => ({
  cats
})

const mapDispatchToProps = { fetchCats, destroyCat }

export default connect(mapStateToProps, mapDispatchToProps)(CatsListContainer)
