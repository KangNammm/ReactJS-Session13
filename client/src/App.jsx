import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Count from "./components/Count";
import Random from './components/Random';
import Product from "./components/Product";
import Modal from "./components/base/modal/Modal";

function App() {
  return (
    <>
      {/* <Count /> */}
      {/* <Random/> */}
      {/* <Product/> */}
      <Modal/>
    </>
  );
}

export default App;
