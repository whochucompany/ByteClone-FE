import React from 'react';
import Router from './router/Router';
import GlobalStyle from "./assets/GlobalStyle";

function App(create) {
  return (
    <>
      <Router />
      <GlobalStyle/>
    </>
  );
}

export default App;
