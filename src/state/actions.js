import * as api from "./api";

export const types = {
  GET_UPCOMING_MOVIES_INIT: "GET_UPCOMING_MOVIES_INIT",
  GET_UPCOMING_MOVIES_SUCCESS: "GET_UPCOMING_MOVIES_SUCCESS",
  GET_UPCOMING_MOVIES_ERROR: "GET_UPCOMING_MOVIES_ERROR",
  GET_MOVIE_DETAILS: "GET_MOVIE_DETAILS"
};

export function getUpcomingMovies(page) {
  return dispatch => {
    dispatch({ type: types.GET_UPCOMING_MOVIES_INIT });

    api
      .getUpcomingMovies(page)
      .then(response => response.json())
      .then(response => {
        return dispatch({
          type: types.GET_UPCOMING_MOVIES_SUCCESS,
          payload: response
        });
      })
      .catch(error =>
        dispatch({ type: types.GET_UPCOMING_MOVIES_ERROR, payload: error })
      );
  };
}
