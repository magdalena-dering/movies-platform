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
  max-height: 600px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${color.tolopea} ;  
  border-radius: 3px; 
  padding: 2.5em  
  &:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;  
  background-image: url(${props=>props.src});  
  background-repeat: no-repeat;
  background-size: cover;
  }
  @media(min-width: 1024px) and (max-width: 1200px){
    width:535px;  
  }
   @media(min-width: 768px) and (max-width: 1023px){
    width: 400px;  
  }
    @media(min-width: 575px) and (max-width: 767px){
    width: 350px;  
  }
    @media(min-width: 320px) and (max-width: 575px){
    width: 280px;  
    left: 5%;
    right: 5%;
  }
 

`;

const MovieDetails = styled.span`
 color: ${color.pinkOcd}
 font-weight: 700;
 z-index: 100000
`;

const CloseIcon = styled.button`
  width: 3em;
  height: 3em;
  right: 1.5em;
  top: 1.5em;
  cursor: pointer;
  position: absolute;
  border: none;
  background-image: url(${close});
  background-color: transparent;
  background-size: 100%;  
  z-index: 1;
`;

const MovieModal = ({movie, onClose}) => {

    const releaseDate = movie && movie.release_date.substring(0, 4);
    const language = movie && movie.original_language.toLocaleUpperCase();

    return (
        <>
            <Modal open={movie}>
                {movie && (
                    <ModalContent src={movie.backdrop_path}>
                        <CloseIcon onClick={onClose}/>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <MovieDetails>{releaseDate} </MovieDetails>
                        <MovieDetails>{language} </MovieDetails>
                        <MovieDetails>{movie.vote_average}</MovieDetails>
                    </ModalContent>
                )}
            </Modal>
        </>
    );
};

export default MovieModal;
