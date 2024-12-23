import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../store";

const SelectGenre = ({ genres, type }) => {
  const dispatch = useDispatch();
  return (
    <Select
      className="flex"
      onChange={(e) =>
        dispatch(fetchDataByGenre({ genre: e.target.value, type }))
      }
    >
      {genres.map((genre, type) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
};

const Select = styled.select`
  margin-left: 50px;
  padding: 8px 16px;
  outline: none;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;

  option {
    cursor: pointer;
  }
`;

export default SelectGenre;
