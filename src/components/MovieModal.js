import React from "react";
import styled from "styled-components";
import color from "../colors";

const Modal = styled.div`
  display: ${props => (props.open ? "flex" : "none")}
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  padding: 1em
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: ${color.white} 
  height: 30em;
`;

const ImgPoster = styled.img`
  position: absolute;
  bottom: 0;
  left: 25%;
`;
const CloseBtn = styled.button`
color: ${color.navy};
font-size: 2em;
border: none
background-color: unset
position: absolute;
right: 0.5em;

`;

const MovieModal = ({movie, onClose}) => {
    const releaseDate =
        movie &&
        movie.release_date
            .split("-")
            .reverse()
            .join("-");
    const language = movie && movie.original_language.toLocaleUpperCase();

    return (
        <>
            <Modal open={movie}>
                {movie && (
                    <ModalContent>
                        <CloseBtn onClick={onClose}>X</CloseBtn>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <p>Release date: {releaseDate}</p>
                        <p>Votes: {movie.vote_average}</p>
                        <p>Language: {language}</p>
                        <ImgPoster src={movie.backdrop_path} alt="poster"/>
                    </ModalContent>
                )}
            </Modal>
        </>
    );
};

export default MovieModal;
