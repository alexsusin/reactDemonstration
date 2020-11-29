import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

const API_KEY = 'd1bd0cfd';

export class MovieDetail extends React.Component {

    static propTypes = {
        id: PropTypes.string,
    }

    state = {
        movie: {}
    }

    viewMovieDetails({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json()).then(movie => {
                console.log(movie)
                this.setState({ movie })
            }
            )
    }

    componentDidMount() {
        const { id } = this.props;
        this.viewMovieDetails({ id });
    }

    goBack() {
        window.history.back()
    }

    render() {
        return (
            <div>
                <img src={this.state.movie.Poster} />
                <h1 class="title is-1">{this.state.movie.Title} ({this.state.movie.Year})</h1>
                <p>Metascore: {this.state.movie.Metascore}</p>
                <p>{this.state.movie.Plot}</p>                
            </div>
        )
    }
}