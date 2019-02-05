const MOVIE_DB_API_KEY = "e2b00c59020e8a3b5d369d82e952428b";
const MOVIE_DB_BASE_URL = "https://api.themoviedb.org/3";

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams).forEach(
      paramName => (baseUrl += `&${paramName}=${queryParams[paramName]}`)
    );
  }
  return baseUrl;
};

export const getUpcomingMovies = async ({ page }) => {
  const fullUrl = createMovieDbUrl("/movie/popular", {
    page
  });
  return fetch(fullUrl);
};

export const getMovieDetails = async ({ movieId }) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
  return fetch(fullUrl);
};
