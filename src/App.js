import React from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-grid-system";
import {connect} from "react-redux";
import {getUpcomingMovies} from "./state/actions";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";
import spinner from "./assets/icons/spinner.svg";
import apiIcon from "./assets/icons/tmdb.svg";
import Global from "./components/Global";
import color from "./colors";

const H1 = styled.h1`
  color: ${color.white};
`;

const AppBar = styled.div`
  background-color: ${color.pinkOcd};
  height: 4.5em;
  padding-left: 0.9em;
  padding-top: 0.2em;  
  margin: 2em 0;
  border-radius: 3px;
  @media (max-width: 375) {
   font-size: 25px    
  }  
`;

const ApiIcon = styled.img`
  width: 8em;
  position: absolute;
  right: 2em;
  top: 0.8em;
  @media (max-width: 375px) {
     width: 6em;   
     top: 1em;    
  }
`;

const Subtitle = styled.p`
   color: ${color.white};    
   text-transform: uppercase;
   font-weight: 700
   padding-left: 0.9em;
`;

const OpenButton = styled.button`
  color: ${color.white};
  font-weight: 500;
  text-transform: uppercase;
  height: 2.5em;
  width: 12em;
  margin: 2.8em;
  background-color: transparent;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid ${color.white};
  border-radius: 3px;
  -webkit-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-letter-spacing: 0.1em;
  -moz-letter-spacing: 0.1em;
  -ms-letter-spacing: 0.1em;
  position: absolute;
  bottom: 120px;
  &:hover {
    letter-spacing: 0.1em;
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
    state = {movie: null};

    componentDidMount() {
        this.props.getUpcomingMovies(1);
    }

    render() {
        const {upcomingMovies} = this.props;
        const {movie} = this.state;
        const movies = upcomingMovies[0];

        return (
            <>
                <Container>
                    <Global/>
                    <AppBar>
                        <H1>Movies</H1>
                        <a href="https://www.themoviedb.org/">
                            <ApiIcon src={apiIcon} alt="api-icon"/>
                        </a>
                    </AppBar>
                    <Subtitle>Upcoming movies</Subtitle>
                    <MovieModal
                        movie={movie}
                        onClose={() => this.setState({movie: null})}
                    />
                    <Row>
                        {movies ? (
                            movies.map(movie => (
                                <Col key={movie.id} sm={6} md={4} lg={3}>
                                    <MovieCard movie={movie}/>
                                    <OpenButton onClick={() => this.setState({movie: movie})}>
                                        Show details
                                    </OpenButton>
                                </Col>
                            ))
                        ) : (
                            <Spinner src={spinner} alt="spinner"/>
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
    {getUpcomingMovies}
)(App);
