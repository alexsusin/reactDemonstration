import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";

const API_KEY = 'd1bd0cfd';

class MovieDetail extends React.Component {

    // static propTypes = {
    //     match: PropTypes.shape({
    //         params: PropTypes.object
    //     })
    // }

    state = {
        movie: {}
    }

    viewMovieDetails({ id }) {        
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json()).then(movie => {
                //console.log(movie)
                this.setState({ movie })
            }
            )
    }

    componentDidMount() {        
        const { id } = this.props.match.params;
        this.viewMovieDetails({ id });
    }

    render() {
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image" id="paddingStyle">
                        <img src={this.state.movie.Poster} alt={this.state.movie.Title} />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content" id="paddingStyle">
                        <h1 className="title is-1">{this.state.movie.Title} ({this.state.movie.Year})</h1>
                        <p><strong>Plot: </strong>{this.state.movie.Plot}</p>
                        <p><strong>Director: </strong>{this.state.movie.Director}</p>
                        <p><strong>Actors: </strong>{this.state.movie.Actors}</p>
                        <p><strong>Date: </strong> {this.state.movie.Released}</p>
                        <p><strong>Metascore: </strong> {this.state.movie.Metascore}</p>
                        <button onClick={() => this.props.history.goBack()}>Volver</button>                        
                    </div>
                </div>
            </article>
        )
    }
}

export default withRouter(MovieDetail);