import React from 'react'
import { Title } from './Title';
import { SearchForm } from './SearchForm'
import { Movie } from './Movie'

export class HomePage extends React.Component {

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
        return (
            <div>
                <Title>Buscador de películas y series</Title>
                <div className="searchForm-wrapper">
                    <SearchForm onResults={this.handleResults} />
                </div>
                {this.state.search ? <div className="moviesList">{this.renderResults()}</div> : <h4>Busca una película o serie!</h4>}
            </div>
        )
    }
}