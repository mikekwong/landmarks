import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const CatsListItem = (props) => (
  <Fragment>
    <h3>
    	<Link to={`/cats/${props.id}`}>
    		{props.name}
    	</Link>
    </h3>
    <img src={props.imageURL} style={{ maxWidth: '150px' }} />
    <button onClick={() => props.handleClick(props.id)}>X</button>
  </Fragment>
);

export default CatsListItem;
