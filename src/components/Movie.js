import React from 'react';
import PropTypes from 'prop-types';

export class Movie extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }

    render() {
        return (
            <a href={`?id=${this.props.id}`} className="card">
                <div className="card-image">
                    <figure className="image">
                        <img src={this.props.poster} alt={this.props.title} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{this.props.title}</p>
                            <p className="subtitle is-6">{this.props.year}</p>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}
