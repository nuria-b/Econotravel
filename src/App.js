import React, { Fragment } from 'react';
import NavBar from './components/NavBar.jsx';
import GlobalStyle from './globalStyles.jsx';
import Footer from './components/Footer.jsx';
import Router from './Router.jsx';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <GlobalStyle/>
        <NavBar/>
        <Router/>
        <Footer/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;