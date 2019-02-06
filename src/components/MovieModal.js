import React from "react";
import styled from "styled-components";
import color from "../colors";
import close from "../assets/icons/cancel.svg";

const Modal = styled.div`
  display: ${props => (props.open ? "flex" : "none")}
  position: fixed; 
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5); 
`;

const ModalContent = styled.div`
  color: ${color.white}   
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  width: 600px;
  height: 600px;
  background: ${color.tolopea} ;  
  border-radius: 3px; 
  padding: 2em  
`;

const MovieDetails = styled.span`
 color: ${color.pinkOcd}
 font-weight: 700;
 z-index:1
`;

const ImgPoster = styled.img`
  position: absolute;
  opacity: 0.2;
  border-radius: 1px;
  width: 600px;
  left: 0;
  bottom: 0;
  border-radius: 1px;
`;

const CloseIcon = styled.img`
  width: 3em;
  cursor: pointer;
  position: absolute;
  right: 1em;
  top: 1em;
`;

const MovieModal = ({movie, onClose}) => {
    const releaseDate = movie && movie.release_date.substring(0, 4);

    const language = movie && movie.original_language.toLocaleUpperCase();

    return (
        <>
            <Modal open={movie}>
                {movie && (
                    <ModalContent>
                        <CloseIcon src={close} onClick={onClose} alt="close-icon"/>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <MovieDetails>{releaseDate} </MovieDetails>
                        <MovieDetails>{language} </MovieDetails>
                        <MovieDetails>{movie.vote_average}</MovieDetails>
                        <ImgPoster src={movie.backdrop_path} alt="poster"/>
                    </ModalContent>
                )}
            </Modal>
        </>
    );
};

export default MovieModal;
