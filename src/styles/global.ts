import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle
`
html, body, #root  
{
  height: 100%;
 
}
body 
{
  background: #f8fdff;
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