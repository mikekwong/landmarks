import React from 'react';
import CatsList from './CatsList.jsx';
import CatDetail from './CatDetail.jsx';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

const Root = () => {
  return (
  	<BrowserRouter>
	    <div>
	      <nav>
	      	<Link to='/cats'>Cats</Link>
	      </nav>
	      <main>
	      	<Route exact path='/cats' component={CatsList} />
	      	<Route exact path='/cats/:id' component={CatDetail} />
	      </main>
	    </div>
	</BrowserRouter>
  );
};

export default Root;
