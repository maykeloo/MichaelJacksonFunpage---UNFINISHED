import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About/About";
import Favorites from "../components/Favorites/Favorites";
import Header from "../components/Header/Header";
import SmoothScroll from "../components/SmoothScroll";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
      <SmoothScroll />
    </>
  );
};

export default Home;
