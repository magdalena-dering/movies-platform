import { combineReducers } from "redux";
import { updateMovieList } from "./helpers";
import { types } from "./actions";

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_UPCOMING_MOVIES_SUCCESS: {
      const movies = updateMovieList(action.payload);
      return [...state, movies];
    }
    default:
      return [...state];
  }
};

const rootReducer = combineReducers({
  upcomingMovies: moviesReducer
});

export default rootReducer;
