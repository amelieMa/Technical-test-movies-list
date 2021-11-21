import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import { moviesReducer } from '../redux/movies/movies.reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
})

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))
