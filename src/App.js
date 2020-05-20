import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matris",
  "Full Matel Jacket",
  "Star wars",
  "OldBody"
]

const movieImages = [
  "https://cdn.pixabay.com/photo/2016/11/21/22/08/white-male-1847732_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/06/02/22/01/dog-2367414_960_720.png",
  "https://cdn.pixabay.com/photo/2015/10/31/12/00/cinema-1015320_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/12/05/21/45/filmklappe-1078813_960_720.png"
]

function App() {
  return (
    <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]}></Movie>
      <Movie title={movieTitles[1]} poster={movieImages[1]}></Movie>
      <Movie title={movieTitles[2]} poster={movieImages[2]}></Movie>
      <Movie title={movieTitles[3]} poster={movieImages[3]}></Movie>
    </div>
  );
}

export default App;
