import React, { Component } from 'react'

const API_KEY = 'd1bd0cfd';

export class SearchForm extends React.Component {
    state = {
        inputMovie: ''
    }

    handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputMovie}`)
            .then(res => res.json()).then(results => {
                const { Search, totalResults } = results;
                console.log({ Search, totalResults })
                this.props.onResults(Search)
            }
            )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Busca una película"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                    </button>
                    </div>
                </div>
            </form>
        )
    }
}