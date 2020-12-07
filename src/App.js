import React from 'react';
import './App.css';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm'
import { Movie } from './components/Movie'
import { MovieDetail } from './components/MovieDetail'
import 'bulma/css/bulma.css';

class App extends React.Component {
	state = {
		results: [],
		search: false
	}

	handleResults = (results) => {
		this.setState({ results, search: true });
	}

	renderResults() {
		return typeof this.state.results === "undefined"
			? <p>Sin resultados</p> :
			this.state.results.map(movie => {
				return (
					<div className="movieItem" key={movie.imdbID}>
						<Movie
							id={movie.imdbID}
							title={movie.Title}
							year={movie.Year}
							poster={movie.Poster}
						/>
					</div>
				)
			})
	}


	render() {
		const url = new URL(document.location);
		const idExists = url.searchParams.has("id");
		if (idExists) {
			return <MovieDetail id={url.searchParams.get("id")} />
		}
		return (
			<div className="App">
				<Title>Buscador de películas</Title>
				<div className="searchForm-wrapper">
					<SearchForm onResults={this.handleResults} />
				</div>
				{this.state.search ? <div className="moviesList">{this.renderResults()}</div>  : <small>Busca una película o serie!</small>}
			</div>
		);
	}

}

export default App;
