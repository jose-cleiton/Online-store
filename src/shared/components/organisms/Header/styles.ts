import styled from "styled-components";


export const Head = styled.header`
  
  top: 0;
  left: 0;
  right: 0;
  height: 92px;
  background: #FFF159;
  gird-area: h;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
    

 
    input {
      width: 500px;
      height: 29px;    
     
      border: none;
      outline: none;
    }
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 92px;
  background: #FFF159;
  z-index: 1;
`;