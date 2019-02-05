import React from "react";
import styled from "styled-components";

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
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`;

const ReleaseDate = styled.p`
  color: red;
`;
const MovieModal = ({ movie, onClose }) => {
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
            <h1>{movie.title}</h1>
            <button onClick={onClose}>X</button>
            <p>{movie.overview}</p>
            <ReleaseDate>Release date: {releaseDate}</ReleaseDate>
            <p>Votes: {movie.vote_average}</p>
            <p>Language: {language}</p>
            <img src={movie.backdrop_path} alt="poster" />
          </ModalContent>
        )}
      </Modal>
    </>
  );
};

export default MovieModal;
