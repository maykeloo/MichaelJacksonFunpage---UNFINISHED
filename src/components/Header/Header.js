import React from "react";
import About from "../About/About";
import Description from "../Description/Description";
import Navbar from "../Navbar/Navbar";
import Player from "../Player/Player";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {

  
  return (
    <>
    <div style={{height: '100vh'}}>
        <Navbar/>
        <Player/>
        <Description/>
        </div>
    </>
  );
};

export default Header;
