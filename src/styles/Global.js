import { createGlobalStyle } from "styled-components";
import color from "../colors";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
body {
  font-family: 'Comfortaa', sans-serif;
  font-size: 15px;
  line-height: 25px;  
  margin: 0;
  padding: 0;
}
::selection {
  background-color: ${color.black};
  color: ${color.navy};
}
:focus {
  outline: none;
}
`;
