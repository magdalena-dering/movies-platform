import React from "react";
import styled from "styled-components";
import { Col } from "react-grid-system";
import color from "./../colors";

const Card = styled.div`
  margin: 2em 0;
  width: 100%;
  @media(max-width: 575px){
  margin:0 auto;
  width: 220px;
  }
`;

const CardContent = styled.div`
  position: relative;
`;

const CardTitle = styled.h4`
  color: ${color.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0.2em;
`;

const MovieImg = styled.img`
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Rating = styled.p`
    color: ${color.tolopea}  
    font-weight: 600; 
    text-align: center;     
    width: 3em;
    height: 3em; 
    padding: 0.7em;         
    border-radius: 30px;   
    opacity: 0.8;
    margin-left: 5.2em;    
    margin-bottom: -1.2em;
    background: ${color.maximumYellow}  
`;

const MovieCard = ({ movie }) => {
  return (
      <Col>
        <Card>
          <CardContent>
            <Rating>{movie.vote_average}</Rating>
            <MovieImg src={movie.poster_path} width={200} alt="poster" />
          </CardContent>
          <CardTitle>{movie.title}</CardTitle>
        </Card>
      </Col>
      );
};

export default MovieCard;
