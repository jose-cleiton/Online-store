import styled from "styled-components";


export const Container = styled.main`

display: grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: 20vh 70vh 10vh;
grid-template-areas: "h h" 
                     "a m" 
                     "f f";
                     


header{
  background: #fee600;
  
  grid-area: h;
}

main {
 
 
  
  overflow: hidden;
  overflow-y: scroll;
  grid-area: m
  
}

main > ul{

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100%;
 
  

  img {
    width: 50px;
    height: 50px;
  }
}
aside{

  background: red;
  overflow: hidden;
  overflow-y: scroll;
  
  grid-area: a;
}

aside > ul{

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100%;


}

aside > h1 {
  text-align: center;
  color: #fff;
  font-size: ;


}

footer{
  background: green;
 
  grid-area: f;
}

  
`;