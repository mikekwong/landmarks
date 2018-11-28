import React, { Component } from 'react';
import CatForm from './CatForm'
import {makeCat} from '../reducers/catsReducer'

import {connect} from 'react-redux';

class NewCat extends Component {

	constructor(){
		super()
		this.state = {
			name: '',
			imageURL: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}

	handleSubmit(evt) {
		evt.preventDefault()
		this.props.makeCat(this.state)
	}

	render() {
		return (
			<div>
				<CatForm
					displayName='MAKE A CAT!'
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					imageURL={this.state.imageURL}
					name={this.state.name}
					/>
			</div>
		);
	}
}


const mapDispatch = (dispatch) => {
	return {
		makeCat: (cat) => dispatch(makeCat(cat))
	}
}

export default connect(null, mapDispatch)(NewCat)



