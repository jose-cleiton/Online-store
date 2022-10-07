import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle
`
html, body, #root  
{
  margin: 0;
  padding: 0;
  background: #7159c1;
  box-sizing: border-box;
 
  
 
}




* 
{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button 
{
  background: none;
  border: none;
  outline: none;
}

a
{
  text-decoration: none;
  outline: none;
}



`;


export default GlobalStyle;