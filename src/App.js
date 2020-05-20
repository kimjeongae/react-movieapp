import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {}

  componentDidMount(){
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={movie.index}></Movie>
    })
    return movies
  }

  render(){
    return (
      <div className="App">              
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }  
}

export default App;
