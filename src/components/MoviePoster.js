import React from "react";
import "./MoviePoster.css";
import { connect } from 'react-redux'; 

function MoviePoster(props) {
  if(props.movie.Response) {
    return (
      <div className="flex-container">
        <div className="poster-props.movie">
          <img
            className="ui image"
            alt="poster"
            src={props.movie.Poster}
          />
        </div>
        <div className="description">
          <h1>
            {props.movie.Title}
            <i className="play circle icon"></i>
          </h1>
          <span>
            <b>Released Date: </b> {props.movie.Released}
          </span>
          <span>
            <b>Rated: </b> {props.movie.Rated}
          </span>
          <span>
            <b>Runtime: </b> {props.movie.Runtime}
          </span>
          <span>
            <b>Language: </b> {props.movie.Language}
          </span>
          <span>
            <b>Genre: </b> {props.movie.Genre}
          </span>
          <span>
            <b>Directors: </b> {props.movie.Director}
          </span>
          <span>
            <b>Actors: </b> {props.movie.Actors}
          </span>
          <span>
            <b>IMDB Rating: </b> {props.movie.imdbRating}
          </span>
          <span>
            <b>Plot: </b> {props.movie.Plot}
          </span>
        </div>
        {window.scrollTo(0,100)}  
      </div>
      
    );
  }
  else {
    return null;
  }
}
const mapStateToProps = (state) => {
  return { movie: state.fetch.movie }
}
export default connect(mapStateToProps)(MoviePoster);

