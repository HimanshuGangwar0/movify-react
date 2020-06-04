import React, { Component } from "react";
import { connect } from 'react-redux';
import SearchBar from "./SearchBar";
import MoviesList from "./MoviesList";
import Loader from './Loader';
import MoviePoster from "./MoviePoster";

class App extends Component {
  render() {
    if(this.props.loading) {
      return <Loader />
    } else {
      return (
        <div>
          <SearchBar />
          <MoviePoster />
          <MoviesList />
        </div>
      )
    }
  } 
}

const mapStateToProps = (state) => {
  return { loading: state.fetch.loading }
}
export default connect(mapStateToProps)(App);
