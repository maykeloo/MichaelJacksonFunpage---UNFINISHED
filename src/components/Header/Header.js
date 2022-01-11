import React from "react";
import Description from "../Description/Description";
import Navbar from "../Navbar/Navbar";
import Player from "../Player/Player";

const Header = () => {
  return (
    <>
        <Navbar/>
        <Player/>
        <Description/>
    </>
  );
};

export default Header;
