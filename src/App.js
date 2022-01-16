import './App.css';
import React, { useState, createContext } from 'react';
import Home from './Sections/Home';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';


export const Context = createContext();

function App() {

  const [currentlyPlaying, setCurrentlyPlaying] = useState();
  const [sidebarVisible, setSidebarVisible] = useState(false)

  const settingSidebar = () => {
    setTimeout(() =>setSidebarVisible(!sidebarVisible), 300)
    
  }

  return (
    <>
    <Router>
    <Context.Provider
      value={{
        visibility: sidebarVisible,
        setVisibility: settingSidebar,
        setCurrentlyPlaying,
        currentlyPlaying
      }}
    >
      <Home/>
      <Sidebar/>
    </Context.Provider>
    </Router>
    </>
  );
}



export default App;
