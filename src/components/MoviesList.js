import React, { Component } from "react";
import { connect } from 'react-redux';
import "./MoviePoster.css";
import { fetchMovies, fetchMovie } from '../actions/index';

class MoviesList extends Component {
  handleMovieSelect = (id) => {
    this.props.fetchMovie(id);
  }
  renderMovies = () => {
    if(this.props.error) {
      return (
        <div className="ui warning message" style={{width:"100%",textAlign:"center",fontSize:"24px"}}>
          <div className="header">
            <i className="envelope open icon"> </i>
            <i> </i>
            {this.props.error}
            <i className="frown icon"></i>
          </div>
        </div>
      );
    } else if(this.props.movies.length > 0) {
    return this.props.movies.map((movie) => {
      return (
        <div className="four wide column" key={movie.imdbID}>
          <div className="ui card movie-list">
            <div className="image">
              <img
                className="ui image"
                alt="poster not available"
                src={movie.Poster}
                onClick={() => this.handleMovieSelect(movie.imdbID)}
              />
            </div>
            <div className="content">
              <a
                className="header"
                onClick={() => this.handleMovieSelect(movie.imdbID)}
              >
                {movie.Title}
                
              </a>
              <div className="description">{movie.Year}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return ( 
      <div className="ui container loading-menu">
        <h1>Search any movie... <i className="search icon"></i></h1>  
      </div>
    )
  }
}
  render() {
    console.log(this.props.movies);
    return <div className="ui grid segment movie-segment">{this.renderMovies()}</div>
  }
}
const mapStateToProps = (state) => {
  return { movies: state.fetch.movies, movie: state.fetch.movie, error: state.fetch.error }
}
export default connect(mapStateToProps, { fetchMovies, fetchMovie })(MoviesList);

