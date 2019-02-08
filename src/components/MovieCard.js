import React from "react";
import styled from "styled-components";
import color from "./../colors";

const Card = styled.div`
  margin: 2em 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OpenButton = styled.button`
 opacity: 0
 color: ${color.white};
 font-weight: 500;
 text-transform: uppercase;
 height: 2.8em;
 width: 14.2em;
 margin: 0.4em;
 z-index: -1;
 background-color: transparent;
 border: 1px solid ${color.white};
 border-radius: 3px;
 letter-spacing: 0.1em;
 -webkit-letter-spacing: 0.1em;
 -moz-letter-spacing: 0.1em;
 -ms-letter-spacing: 0.1em;
 -webkit-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
 transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
 position: absolute;
 bottom: 140px;
`;

const MovieImg = styled.img`
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const CardContent = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    ${OpenButton} {
      opacity: 1;
      z-index: 0;
    }
    ${MovieImg} {
      opacity: 0.2;
    }
  }
`;

const CardTitle = styled.h4`
  color: ${color.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0.2em;
  width: 12em;
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
    z-index:1;
    position: relative;
`;

const MovieCard = ({ movie, onClick}) => {
    return (
        <Card>
            <CardContent>
                <Rating>{movie.vote_average}</Rating>
                <MovieImg src={movie.poster_path} width={200} alt="poster"/>
                <CardTitle>{movie.title}</CardTitle>
                <OpenButton onClick={onClick}>Show details</OpenButton>
            </CardContent>
        </Card>
    );
}

export default MovieCard;
