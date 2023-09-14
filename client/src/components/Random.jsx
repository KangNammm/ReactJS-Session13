import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { random } from "../redux/useSlides/randomSlide";


export default function Random() {
  const dispatch = useDispatch();
  const count = useSelector((number) => number);

  const handleRandom = () => {
    const randomNumber = Math.ceil(Math.random() * 10);
    dispatch(random(randomNumber));
  };
  return (
    <>
      {/* <h1>Random: {JSON.stringify(listNumber)}</h1> */}
      <button onClick={handleRandom}>Random</button>
    </>
  );
}
