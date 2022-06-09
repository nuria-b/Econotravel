import React, { Fragment } from 'react';
import NavBar from './components/NavBar.jsx';
import GlobalStyle from './globalStyles.jsx';
import Search from './components/Search.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import Reservation from './components/Reservation.jsx';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <NavBar/>
      <HomePage/>
      <Search/>
      <Reservation/>
      <Footer/>
    </Fragment>
  );
}

export default App;