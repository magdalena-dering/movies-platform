import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-grid-system";
import { connect } from "react-redux";
import { getUpcomingMovies } from "./state/actions";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";
import spinner from "./assets/icons/spinner.svg";
import apiIcon from "./assets/icons/tmdb.svg";
import Global from "./components/Global";
import color from "./colors";

const AppBar = styled.div`
  background-color: ${color.pinkOcd};
  height: 4.5em;
  padding-left: 0.9em;
  padding-top: 0.2em;
  margin: 2em 0;
  border-radius: 3px;
  @media (max-width: 575) {
    font-size: 25px;
  }
`;

const H1 = styled.h1`
  color: ${color.white};
`;

const SubTitle = styled.p`
   color: ${color.white};    
   text-transform: uppercase;
   font-weight: 700
   padding-left: 0.9em;
    @media (max-width: 575) {
      width: 14em;   
  }
`;

const ApiIcon = styled.img`
  width: 8em;
  position: absolute;
  right: 2em;
  top: 0.8em;
  @media (max-width: 575px) {
    width: 6em;
    top: 1em;
  }
`;

const Spinner = styled.img`
  width: 5em
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
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
      <Container>
        <Global />
        <AppBar>
          <H1>Movies</H1>
          <a href="https://www.themoviedb.org/">
            <ApiIcon src={apiIcon} alt="api-icon" />
          </a>
        </AppBar>
        <SubTitle>Upcoming movies</SubTitle>
        <MovieModal
          movie={movie}
          onClose={() => this.setState({ movie: null })}
        />
        <Row>
          {movies ? (
            movies.map(movie => (
              <Col key={movie.id} sm={6} md={4} lg={3}>
                <MovieCard movie={movie} />
              </Col>
            ))
          ) : (
            <Spinner src={spinner} alt="spinner" />
          )}
        </Row>
      </Container>
    );
  }
}

export default connect(
  state => ({
    upcomingMovies: state.upcomingMovies
  }),
  { getUpcomingMovies }
)(App);
