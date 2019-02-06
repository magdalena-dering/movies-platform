import {createGlobalStyle} from "styled-components";
import color from "../colors";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
body {
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700');
  font-family: 'Montserrat', sans-serif; 
  font-size: 15px;
  line-height: 25px;  
  margin: 0;
  padding: 0;
  background-color: ${color.tolopea};
  
}

h1, h2, h3, h4, h5, p{
letter-spacing: 0.06em;
}

::selection {
  background-color: ${color.black};
  color: ${color.tolopea};
}
:focus {
  outline: none;
}


button{
cursor: pointer
}

`;
