import React from 'react';
//import PropTypes from "prop-types";
import './Movie.css';


function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster}></MoviePoster>
            <h1>{title}</h1>
        </div>            
    )
}

function MoviePoster({poster}){
    return (
        <img src={poster} width="300" alt="Movie Poster"></img>
    )
}

export default Movie;