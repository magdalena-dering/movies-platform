import React from "react";
import styled from "styled-components";
import { Row } from "react-grid-system";
import color from "./../colors";

const Card = styled.div`
  margin: 1em;
  width: 100%;
`;

const CardContent = styled.div`
  padding: 1em;
  position: absolute;
`;

const CardTitle = styled.h4`
  color: ${color.black};
  font-size: 24px;
  height: 2.2em;
`;

const MovieDescription = styled.p`
  color: ${color.white};
`;

class MovieCard extends React.Component {
  state = {
    isMouseOver: false
  };

  render() {
    const { movie } = this.props;
    const description = this.state.isMouseOver ? movie.overview : null;
    return (
      <>
        <Row>
          <Card
            onMouseOver={() => this.setState({ isMouseOver: true })}
            onMouseLeave={() => this.setState({ isMouseOver: false })}
          >
            <CardTitle>{movie.title}</CardTitle>
            <CardContent>
              <MovieDescription>{description}</MovieDescription>
            </CardContent>
            <img src={movie.poster_path} width={280} alt="poster" />
          </Card>
        </Row>
      </>
    );
  }
}

export default MovieCard;
