import React from "react";
import video from "../assets/witcher.mp4";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls muted />
      </div>
    </Container>
  );
};

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;

    .back {
      display: flex;
      position: absolute;
      padding: 0.75rem;
      z-index: 1;
      left: 2rem;
      top: 2rem;
      border-radius: 50%;
      color: white;
      border: 3px solid white;

      svg {
        font-size: 2rem;
        font-weight: 700;
        cursor: pointer;
      }
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export default Player;
