import React from "react";
import Description from "../Description/Description";
import Navbar from "../Navbar/Navbar";
import Player from "../Player/Player";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {

  
  return (
    <>
        <Navbar/>
        <Player/>
        <Description/>
        <Sidebar/>
    </>
  );
};

export default Header;
