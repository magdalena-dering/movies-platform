import { createGlobalStyle } from "styled-components";
import color from "../colors";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
body { 
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


::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 3px;
	background-color: #222b31;
}

::-webkit-scrollbar{  
	width: 5px;
	background-color: #222b31;
}

::-webkit-scrollbar-thumb
{
	border-radius: 3px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #f83745;
}





`;
