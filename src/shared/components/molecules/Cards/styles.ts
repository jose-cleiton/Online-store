import styled from "styled-components";


export const Cards = styled.div`



                     
width:55vw;
height: 100vw;
padding: 20px;



img 
{

  width: 10vw;
  height: 11vW;
}

ul 
{

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  li{
    position: relative;
    :after 
    {
      content: "Cleiton";
      position: absolute;
        top: 0;
    }


:active{
  transform: translate(-1px, 1px);
}
:hover{
  box-shadow: 0px 16px 20px  rgba(0,0,0,0.3);
  transition: 0.2s ease-in-out;
  :after{
    content: "clique para comprar!";

  }
}
  }


}






`;