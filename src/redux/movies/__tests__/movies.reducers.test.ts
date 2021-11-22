import {
  fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
  fetchMovieRequest,
  fetchMovieSuccess,
  fetchMovieFailure,
  fetchSearchMoviesRequest,
  fetchSearchMoviesSuccess,
  fetchSearchMoviesFailure
} from '../movies.actions'

import { movieMock, moviesMock } from '../../../__mock__/movies.mocks'

// import { setRecipes } from '../Recipe.store'
import { moviesReducer } from '../movies.reducer'

const initialState = moviesReducer(undefined, {})

describe('movie Reducer', () => {
  it('should return the initial state', () => {
    expect(initialState).toMatchObject({
      movie: null,
      movies: null,
      loading: false,
      error: null,
    })
  })

  // POPULAR
  it('should fetchPopularMoviesRequest return expected state', () => {
    const fetchPopularMoviesRequestState = moviesReducer(initialState, fetchPopularMoviesRequest())

    const expectedState = {
      ...initialState,
      loading: true,
    }

    expect(fetchPopularMoviesRequestState).toMatchObject(expectedState)
  })

  it('should fetchPopularMoviesSuccess return expected state', () => {
    const fetchPopularMoviesSuccessState = moviesReducer(initialState, fetchPopularMoviesSuccess(moviesMock))

    const expectedState = {
      ...initialState,
      loading: false,
      movies: moviesMock
    }

    expect(fetchPopularMoviesSuccessState).toMatchObject(expectedState)
  })

  it('should fetchPopularMoviesSuccess without movies return expected state', () => {
    const fetchPopularMoviesSuccessState = moviesReducer(initialState, fetchPopularMoviesSuccess(null))

    const expectedState = {
      ...initialState,
      loading: false,
      movies: null
    }

    expect(fetchPopularMoviesSuccessState).toMatchObject(expectedState)
  })

  it('should fetchPopularMoviesFailure return expected state', () => {
    const fetchPopularMoviesFailureState = moviesReducer(initialState, fetchPopularMoviesFailure("Oups !"))

    const expectedState = {
      ...initialState,
      loading: false,
      error: "Oups !"
    }

    expect(fetchPopularMoviesFailureState).toMatchObject(expectedState)
  })

  // MOVIE
  it('should fetchMovieRequest return expected state', () => {
    const fetchMovieRequestState = moviesReducer(initialState, fetchMovieRequest())

    const expectedState = {
      ...initialState,
      loading: true,
    }

    expect(fetchMovieRequestState).toMatchObject(expectedState)
  })

  it('should fetchMovieSuccess return expected state', () => {
    const fetchMovieSuccessState = moviesReducer(initialState, fetchMovieSuccess(movieMock))

    const expectedState = {
      ...initialState,
      loading: false,
      movie: movieMock
    }

    expect(fetchMovieSuccessState).toMatchObject(expectedState)
  })

  it('should fetchMovieSuccess without movie return expected state', () => {
    const fetchMovieSuccessState = moviesReducer(initialState, fetchMovieSuccess(null))

    const expectedState = {
      ...initialState,
      loading: false,
      movie: null
    }

    expect(fetchMovieSuccessState).toMatchObject(expectedState)
  })

  it('should fetchMovieFailure return expected state', () => {
    const fetchMovieFailureState = moviesReducer(initialState, fetchMovieFailure("Oups !"))

    const expectedState = {
      ...initialState,
      loading: false,
      error: "Oups !"
    }

    expect(fetchMovieFailureState).toMatchObject(expectedState)
  })

  // SEARCH
  it('should fetchSearchMoviesRequest return expected state', () => {
    const fetchSearchMoviesRequestState = moviesReducer(initialState, fetchSearchMoviesRequest())

    const expectedState = {
      ...initialState,
      loading: true,
    }

    expect(fetchSearchMoviesRequestState).toMatchObject(expectedState)
  })

  it('should fetchSearchMoviesSuccess return expected state', () => {
    const fetchSearchMoviesSuccessState = moviesReducer(initialState, fetchSearchMoviesSuccess(moviesMock))

    const expectedState = {
      ...initialState,
      loading: false,
      movies: moviesMock
    }

    expect(fetchSearchMoviesSuccessState).toMatchObject(expectedState)
  })

  it('should fetchSearchMoviesSuccess without movies return expected state', () => {
    const fetchSearchMoviesSuccessState = moviesReducer(initialState, fetchSearchMoviesSuccess(null))

    const expectedState = {
      ...initialState,
      loading: false,
      movies: null
    }

    expect(fetchSearchMoviesSuccessState).toMatchObject(expectedState)
  })

  it('should fetchSearchMoviesFailure return expected state', () => {
    const fetchSearchMoviesFailureState = moviesReducer(initialState, fetchSearchMoviesFailure("Oups !"))

    const expectedState = {
      ...initialState,
      loading: false,
      error: "Oups !"
    }

    expect(fetchSearchMoviesFailureState).toMatchObject(expectedState)
  })

})
