import styled from "styled-components";




export const Div = styled.div`

display: grid;
width: 300px;
height: 600px;
border: 1px solid #000;
padding: 10px;
margin: 10px;

grid-template-rows: 10fr 30fr;
grid-template-areas: "foto" 
                     "texto" ;


header {
  width: 284px;
  grid-area: foto;
  
  padding: 20px;
  
}  

main {
  width: 284px;
  height: 300px;
  

  
  grid-area: texto;
  
  padding: 20px;
  margin-top: 20px;


  h2{
    font-size: 14px;
  }
  
}






`;