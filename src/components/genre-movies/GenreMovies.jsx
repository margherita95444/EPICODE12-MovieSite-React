import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesGenre } from '../../functions/moviesGenre';
import GenreMoviesRow from '../movies-list-row/MoviesListRow'


export default function GenresMovies() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [movies, setMoviesGenre] = useState([]);
    const {genreId} = useParams();

    if(!hasLoaded){
        getMoviesGenre(genreId).then(movies => {
            setMoviesGenre(movies);
            setHasLoaded(true);
        });
    }
    
    return (
            
        <div className="row ">
            {movies.map(movie => <GenreMoviesRow movie={movie} key={movie.uuid}/>)}
        </div>
    );
}