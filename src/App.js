import React, { Fragment } from "react";
import NavBar from "./components/NavBar.jsx";
import Reservation from "./components/Reservation.jsx";
import GlobalStyle from "./globalStyles.jsx";
import Search from './components/Search.jsx';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <NavBar/>
      <Search/>
    </Fragment>
  );
}

export default App;
