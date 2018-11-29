import React, { Component } from 'react'
import CatForm from './CatForm'
import { editCat } from '../reducers/citiesReducer'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class EditCat extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      imageURL: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  static getDerivedStateFromProps (props, state) {
    return {
      name: props.name,
      imageURL: props.imageURL
    }
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    console.log(this.props)
    evt.preventDefault()
    this.props.editCat(this.state, this.props.match.params.id)
  }

  render () {
    return (
      <div>
        <CatForm
          displayName='EDIT THIS CAT!'
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          imageURL={this.state.imageURL}
          name={this.state.name}
        />
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    editCat: (cat, id) => dispatch(editCat(cat, id))
  }
}

export default withRouter(connect(null, mapDispatch)(EditCat))
