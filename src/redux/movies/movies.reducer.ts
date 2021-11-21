
import {
  FETCH_POPULAR_MOVIES_REQUEST,
  FETCH_POPULAR_MOVIES_SUCCESS, 
  FETCH_POPULAR_MOVIES_ERROR
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
        loading: false,
        movies: action.payload,
        error: ''
      }
    }
    case FETCH_POPULAR_MOVIES_ERROR: {
      return {
        loading: false,
        movies: [],
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}
