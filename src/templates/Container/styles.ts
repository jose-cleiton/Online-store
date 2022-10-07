import styled from "styled-components";


export const Container = styled.main`

display: grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: 20vh 70vh 10vh;
grid-template-areas: "h h" 
                     "m a" 
                     "f f";
                     


header{
  background: yellow;
  
  grid-area: h;
}

main{
  background: blue;
  
  grid-area: m
}
aside{

  background: red;
  
  grid-area: a;
}

footer{
  background: green;
 
  grid-area: f;
}

  
`;