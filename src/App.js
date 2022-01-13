import './App.css';
import Header from './components/Header/Header';
import React, { useState, createContext } from 'react';

export const Context = createContext();

function App() {

  const [sidebarVisible, setSidebarVisible] = useState(false)

  const settingSidebar = () => {
    setTimeout(() =>setSidebarVisible(!sidebarVisible), 300)
    
  }

  return (
    <>
    <Context.Provider
      value={{
        visibility: sidebarVisible,
        setVisibility: settingSidebar
      }}
    >
      <Header/>
    </Context.Provider>
    </>
  );
}

export default App;
