/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const styled = {
    color: "red",
    height: 50,
    width: 150,
    fontSize: "1.5rem",
    margin: "10px 30px",
    backgroundColor: "black",
    borderRadius: "20px",
  };
  const dispatch = useDispatch();
  const { a } = useSelector((state) => state.custom);
  const AddBtn = () => {
    dispatch({
      type: "increment",
      payload: 5,
    });
  };
  const SubBtn = () => {
    dispatch({
      type: "decrement",
      payload: 5,
    });
  };

  return (
    <div>
      <h1>{a}</h1>
      <button style={styled} onClick={AddBtn}>
        Increment
      </button>
      <button style={styled} onClick={SubBtn}>
        Decrement
      </button>
    </div>
  );
};

export default Home;
