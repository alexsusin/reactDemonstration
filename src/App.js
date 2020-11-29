import React from 'react';
import './App.css';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm'
import { Credits } from './components/Credits'
import { Movie } from './components/Movie'
import { MovieDetail } from './components/MovieDetail'
import 'bulma/css/bulma.css';

class App extends React.Component {
	state = {
		results: [],
		usedSearch: false
	}

	handleResults = (results) => {
		this.setState({ results });
	}

	renderResults() {
		return this.state.results.map(movie => {
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
			return <MovieDetail id={url.searchParams.get("id")}/>
		}
		return (
			<div className="App">
				<Title>Buscador de películas</Title>
				<div className="searchForm-wrapper">
					<SearchForm onResults={this.handleResults} />
				</div>
				{this.state.results.length === 0
					? <p>Sin resultados</p>
					: <div className="moviesList">{this.renderResults()}</div>
				}
				<footer className="footer">
					<Credits />
				</footer>
			</div>
		);
	}

}

export default App;
