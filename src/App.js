import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-grid-system";
import { connect } from "react-redux";
import { getUpcomingMovies } from "./state/actions";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";
import Global from "./styles/Global";
import color from "./colors";

const H1 = styled.h1`
  color: ${color.navy};
  text-align: center;
`;

const Button = styled.button`
  color: ${color.white};
  height: 4em;
  width: 12em;
  padding: 1.5em auto;
  margin: 0 auto;
  background-color: ${color.navy};
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.1em;
  &:hover {
    letter-spacing: 0.3em;
    background-color: ${color.turquoise};
  }
`;

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
        <Global />
        <Container>
          <H1>Upcoming movies..</H1>
          <MovieModal
            movie={movie}
            onClose={() => this.setState({ movie: null })}
          />
          <Row>
            {movies ? (
              movies.map(movie => (
                <Col key={movie.id} sm={12} md={3} lg={3}>
                  <MovieCard movie={movie} />
                  <Button onClick={() => this.setState({ movie: movie })}>
                    Show details
                  </Button>
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
