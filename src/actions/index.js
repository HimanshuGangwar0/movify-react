import axios from 'axios';
import { HANDLE_SEARCH, FETCH_MOVIES, LOADING_START, LOADING_STOP, FETCH_MOVIE, SHOW_ERROR, REMOVE_ERROR, FETCH_ERROR } from './types';

export const handleSearch = (term) => {
    return {
        type: HANDLE_SEARCH,
        payload: term 
    }
};

export const fetchMovies = (value) => {
    return function(dispatch) {
        if(!value) {
            dispatch({ type:SHOW_ERROR, payload:"Must enter a value..can't be empty!" });
            setTimeout(() => dispatch({type:REMOVE_ERROR}), 1000);
        } else {
            dispatch({ type:LOADING_START });
            axios.get(`https://www.omdbapi.com/?apikey=74e4bec3&s=${value}`)
            .then(res => {
                if(res.data.Search){
                    dispatch({ type: FETCH_MOVIES, payload: res.data.Search});
                    dispatch(fetchMovie(res.data.Search[0].imdbID));
                } else {
                    dispatch({type:FETCH_ERROR, payload:"Sorry! Query Not Founded....Try again" });
                    setTimeout(() => dispatch({type:REMOVE_ERROR}), 3000);
                }
            });
            dispatch({ type:LOADING_STOP });
        }
    };
};

export const fetchMovie = (id) => {
    return function(dispatch) {
        axios.get(`https://www.omdbapi.com/?apikey=74e4bec3&i=${id}`)
        .then(res => {
            dispatch({ type: FETCH_MOVIE , payload: res.data});
        });
    }
}
