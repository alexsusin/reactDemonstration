import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MovieDetail  from './components/MovieDetail';
import { HomePage } from './components/HomePage';

import 'bulma/css/bulma.css';


class App extends React.Component {

	render() {
		// const url = new URL(document.location);
		// if (url.searchParams.has("id")) {
		// 	return <MovieDetail id={url.searchParams.get("id")} />
		// }
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/movieDetail/:id" component={MovieDetail} />
				</Switch>
			</div>
		);
	}
}

export default App;
