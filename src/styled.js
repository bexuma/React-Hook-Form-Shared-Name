import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
 }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

export { Container, GlobalStyle };
