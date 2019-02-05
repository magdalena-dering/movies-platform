import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { connect } from "react-redux";
import { getUpcomingMovies } from "./state/actions";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";

class App extends React.Component {
  state = { movie: null };

  componentDidMount() {
    this.props.getUpcomingMovies(1);
  }

  render() {
    const { upcomingMovies } = this.props;
    const { movie } = this.state;
    const movies = upcomingMovies[0];

    return (
      <>
        <Container>
          <MovieModal
            movie={movie}
            onClose={() => this.setState({ movie: null })}
          />
          <Row>
            {movies ? (
              movies.map(movie => (
                <Col key={movie.id} sm={12} md={3} lg={3}>
                  <MovieCard movie={movie} />
                  <button onClick={() => this.setState({ movie: movie })}>
                    Show details
                  </button>
                </Col>
              ))
            ) : (
              <p>loading...</p>
            )}
          </Row>
        </Container>
      </>
    );
  }
}

export default connect(
  state => ({
    upcomingMovies: state.upcomingMovies
  }),
  { getUpcomingMovies }
)(App);
