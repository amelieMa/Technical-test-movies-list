import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import { moviesReducer } from '../redux/movies/movies.reducer';
import { MoviesState } from '../redux/movies/movies.types';

export interface AppStoreState {
  movies: MoviesState;
}

const rootReducer = combineReducers({
  movies: moviesReducer,
})

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))
