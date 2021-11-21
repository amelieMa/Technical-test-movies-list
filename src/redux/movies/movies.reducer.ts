
import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS, 
  FETCH_POPULAR_MOVIES_ERROR,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR
} from './movies.actions'

import { initiatialMoviesStore } from './movies.store'

export const moviesReducer = (state: Record<string, any> = initiatialMoviesStore, action: Record<string, any>) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_POPULAR_MOVIES_SUCCESS: {
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: ''
      }
    }
    case FETCH_POPULAR_MOVIES_ERROR: {
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload
      }
    }
    case FETCH_MOVIE_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_MOVIE_SUCCESS: {
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        loading: false,
        movie: action.payload,
        error: ''
      }
    }
    case FETCH_MOVIE_ERROR: {
      return {
        ...state,
        loading: false,
        movie: null,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}
