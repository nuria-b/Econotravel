import React, { Fragment } from 'react';
import NavBar from './Pages/NavBar.jsx';
import GlobalStyle from './globalStyles.jsx';
import Footer from './Pages/Footer.jsx';
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