import React, { Component } from 'react';

class CatForm extends Component {


	render(){
	    return (
	      <div>	
	      	  <h3>{this.props.displayName}</h3>

		      <form onSubmit={this.props.handleSubmit}>
		        <div>
		          <label>name</label>
		          <input
		          	onChange={this.props.handleChange}
		            type='text'
		            name='name'
		            value={this.props.name} />
		        </div>
		        <div>
		          <label>profile photo URL</label>
		          <input
		          	onChange={this.props.handleChange}
		            type='text'
		            name='imageURL'
		            value={this.props.imageURL} />
		        </div>
		        <div>
		          <button type='submit'>submit</button>
		        </div>
		      </form>
		    </div>
	    );
	}
	

}


export default CatForm

