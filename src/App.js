import React, { Fragment } from 'react';
import NavBar from './components/NavBar.jsx';
import GlobalStyle from './globalStyles.jsx';
import Search from './components/Search.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <NavBar/>
      <Search/>
      <Footer/>
    </Fragment>
  );
}

export default App;
