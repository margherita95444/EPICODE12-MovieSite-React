import React from "react";
import { getMovies } from '../../functions/movies';
import MoviesListrow from '../movies-list-row/MoviesListRow'

export default class MoviesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        getMovies().then(movies => this.setState({movies}));   
    }

    render() {
        //console.log(this.state.genres)
        //console.log(this.state.movies)
        const films = this.state.movies.map(movie => <MoviesListrow movie={movie} key={movie.id}/>);

        return (
            
            <div className="row ">
                { films } 
            </div>
        );
    }
}