import { useParams } from "react-router-dom";
import {useState, React } from "react";

export default function Movie (props) {
    const [hasLoadedUser, setHasLoadedUser] = useState(false);
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
            'X-RapidAPI-Key': '4b2194b024mshf31ac099cba239fp166086jsna72316c37f89'
        }
    };
    

    const getMovie = () => {
        return fetch(`https://movies-app1.p.rapidapi.com/api/movie/${movieId}`, options) 
        .then(resp => resp.json())
        
    }
    
    //Load Movie
    if (!hasLoadedUser) {
        getMovie().then(movie => setMovie(movie));
        setHasLoadedUser(true);
    }
    
     const movieObj = {...movie.result}

     //const genres = movieObj.genres;
    //  const genre = genres[0]
    //  console.log(genre);

    return (
       <div className=" row mt-5">
            <div className="col-4">
                <img className="movie ms-5" src={movieObj.image}/>
            </div> 
            <div className="col-7">
                <p><span className="text-danger">Title:</span>  {movieObj.titleOriginal}</p> 
                <p><span className="text-danger">Description:</span>  {movieObj.description}</p> 
                <p><span className="text-danger">Year:</span>  {movieObj.year}</p> 
                <p><span className="text-danger">Release Date:</span>  {movieObj.release}</p> 
                <p><span className="text-danger">Rating:</span>  {movieObj.rating}</p> 
                {/* <p><span className="text-danger">Genre:</span>  {genre.name}</p>   */}
            </div> 
        </div>       
    );
 }

