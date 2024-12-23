import React from "react";
import background from "../assets/login.jpg";
import styled from "styled-components";

const Background = () => {
  return (
    <Container>
      <img src={background} alt="BackgroundImage" />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
`;
export default Background;
