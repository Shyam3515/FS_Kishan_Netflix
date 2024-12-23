import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import loader from "../assets/loading_1.gif";
import MovieLogo from "../assets/homeTitle.webp";

import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { fetchMovies, getGenres } from "../store";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  }, [genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // Random
  const [random, setRandom] = useState(8);
  const randomIndex = () => {
    if (movies.length > 0) {
      const index = Math.floor(Math.random() * movies.length - 1);
      setRandom(index);
    }
  };

  useEffect(() => {
    randomIndex();
  }, []);

  // console.log(movies);
  return movies.length > 0 ? (
    <Container>
      <Navbar isScrolled={isScrolled} />

      {/* Hero */}
      <div className="hero">
        <img
          src={`https://image.tmdb.org/t/p/original${
            movies[random]?.image || ""
          }`}
          alt="Movie Poster"
          className="background-image"
        />

        {/* Content */}
        <div className="container">
          <div className="logo">
            <h1>{movies[random]?.name || "Loading..."}</h1>
          </div>

          <div className="buttons flex">
            <button
              onClick={() => navigate("/player")}
              className="flex j-center a-center"
            >
              <FaPlay />
              Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  ) : (
    <img src={loader} className="load-image" />
  );
};

const Container = styled.div`
  background: black;

  .hero {
    position: relative;

    img {
      filter: brightness(60%);
      height: 100vh;
      width: 100vw;
    }

    .container {
      position: absolute;
      bottom: 6rem;

      .logo {
        h1 {
          font-size: 3rem;
          margin-left: 5rem;
          margin-bottom: 0;
        }
      }

      .buttons {
        margin: 3rem 5rem;
        gap: 2rem;

        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.4rem;
          border: none;
          padding: 0.8rem 2.4rem;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;

            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
export default Netflix;
