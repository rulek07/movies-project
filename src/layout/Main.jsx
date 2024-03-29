import React, { Component } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

class Main extends Component {
    state = {
        movies: [],
    };
    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=6cc5ee48&s=${str}`)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=6cc5ee48&s=matrix')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    render() {
        const { movies } = this.state;

        return (
            
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {movies.length ? (
                    <Movies movies={this.state.movies} />
                ) : (
                    <Preloader />
                )}
            </main>
        );
    };
};

export { Main };