import { HANDLE_SEARCH, FETCH_MOVIES, LOADING_START, LOADING_STOP, FETCH_MOVIE, SHOW_ERROR, REMOVE_ERROR, FETCH_ERROR } from '../actions/types';

const initialState = {
    text: '',
    movies: [],
    movie: [],
    loading: false,
    error: ''
}

export default (state=initialState, action) => {
    switch(action.type) {
        case HANDLE_SEARCH:
            return {
                ...state, text:action.payload
            }
        case LOADING_START:
            return {
                ...state, loading:true
            }
        case LOADING_STOP:
            return {
                ...state, loading:false
            }
        case FETCH_MOVIES:
            return {
                ...state, movies:action.payload, error:''
            }
        case FETCH_MOVIE:
            return {
                ...state, movie:action.payload,
            }
        case SHOW_ERROR:
            return {
                ...state, error:action.payload, movies:[], movie:[],
            }
        case REMOVE_ERROR:
            return {
                ...state, error:'', movie: [], movies: [],
            }
        case FETCH_ERROR:
            return {
                ...state, error:action.payload, movies:[], text:'', movie:[],
            }
        default:
            return state
    };
};