import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSearch, fetchMovies, fetchMovie } from "../actions/index";
import "./MoviePoster.css";

class SearchBar extends Component {
  handleOnChange = (e) => {
    this.props.handleSearch(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.value);
  };

  render() {
    return (
      <div>
        <div className="ui inverted segment">
          <div className="ui inverted segment">
            <div className="ui center aligned header">
              <h1 className="ui inverted orange header">
                <span className="logo">Movify <i className="play circle icon"></i></span>
              </h1>
            </div>
          </div>
          <div className="ui centered grid">
            <div className="six wide tablet eight wide computer column">
              <div className="ui form">
                <form onSubmit={this.handleSubmit}>
                  <div className="ui fluid action input">
                    <input 
                      type="text" 
                      placeholder="Enter movie..." 
                      onChange={this.handleOnChange}
                      value={this.props.value}  
                    />
                    <button 
                      className="ui icon button" 
                      onClick={this.handleSubmit}
                    >
                      <i className="search icon"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="six wide tablet eight wide computer column icons" style={{textAlign:"center"}}>
              <h1>
                <i className="large yellow imdb icon"></i>
                <i className="large blue react icon"></i>
                <a className="name" href="https://github.com/HimanshuGangwar0" target="_blank"><i className="large github icon"></i></a>
                <a href="https://www.linkedin.com/in/himanshu-gangwar-154569160/" target="_blank"><i className="large linkedin icon"></i></a>
              </h1>
            </div>
          </div>
          <div className="ui inverted segment below-header">
            <p>For any detail click on the movie.... Made with<i class="heart icon"></i></p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { value: state.fetch.text };
};

export default connect(mapStateToProps, { handleSearch, fetchMovies, fetchMovie })(
  SearchBar
);
