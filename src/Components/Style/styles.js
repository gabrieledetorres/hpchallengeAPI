import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
  
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    
  }
`;

export const Nav = styled.nav`
  list-style: none;
  text-decoration: none;
`;

export const Li = styled.li`
  list-style: none;
  text-decoration: none;
`;

export const Div = styled.div`
  font-family: "Bebas Neue", cursive;
  background-color: #9b2226;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  height: 100%;
`;

export const UL = styled.ul`
  font-family: "Bebas Neue", cursive;
  font-size: 20px;
  text-align: center;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

export const Foto = styled.img`
  width: 70vw;
`;
