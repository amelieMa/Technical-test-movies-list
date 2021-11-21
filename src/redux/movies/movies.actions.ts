const MOVIES_NAMESPACE = 'MOVIES'

export const FETCH_POPULAR_MOVIES_REQUEST = `${MOVIES_NAMESPACE}/FETCH_POPULAR_MOVIES_REQUEST`;
export const FETCH_POPULAR_MOVIES_SUCCESS = `${MOVIES_NAMESPACE}/FETCH_POPULAR_MOVIES_SUCCESS`;
export const FETCH_POPULAR_MOVIES_ERROR = `${MOVIES_NAMESPACE}/FETCH_POPULAR_MOVIES_ERROR`;

export const fetchAllMoviesRequest = () => ({
  type: FETCH_POPULAR_MOVIES_REQUEST
})

export const fetchAllMoviesSuccess = (movies: any) => ({
  type: FETCH_POPULAR_MOVIES_SUCCESS,
  payload: movies
})

export const fetchAllMoviesFailure = (error: any) => ({
  type: FETCH_POPULAR_MOVIES_ERROR,
  payload: error
})