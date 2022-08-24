import React from 'react';
import Router from './router/Router';
import GlobalStyle from "./assets/GlobalStyle";
import './App.css';

function App(create) {
  localStorage.setItem("View","guest")
  return (
    
    <>
      <Router />
      <GlobalStyle/>
    </>
  );
}

export default App;
