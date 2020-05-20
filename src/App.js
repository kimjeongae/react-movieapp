import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {
    greeting :'Hello!',
    movies : [
      {
        title:"Matris",
        poster:"https://cdn.pixabay.com/photo/2016/11/21/22/08/white-male-1847732_960_720.jpg"
      },
      {
        title:"Full Matel Jacket",
        poster:"https://cdn.pixabay.com/photo/2017/06/02/22/01/dog-2367414_960_720.png"
      },
      {
        title:"Star wars",
        poster:"https://cdn.pixabay.com/photo/2015/10/31/12/00/cinema-1015320_960_720.jpg"
      },
      {
        title:"Old Boy",
        poster:"https://cdn.pixabay.com/photo/2015/12/05/21/45/filmklappe-1078813_960_720.png"
      }
    ]
  }

  componentDidMount(){
    setTimeout(() => {
      console.log('5 seconds after');

      this.setState({
        movies:[          
          {
            title:"Trainspotting",
            poster:"https://cdn.pixabay.com/photo/2015/12/05/21/45/filmklappe-1078813_960_720.png"
          },
          ...this.state.movies
        ]
      })
    }, 5000);
  }

  render(){
    return (
      <div className="App">              
        {this.state.movies.map( (movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={movie.index}></Movie>
        })}
      </div>
    );
  }  
}

export default App;
