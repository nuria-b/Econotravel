import React, { Fragment } from "react";
import NavBar from "./components/NavBar.jsx";
import Reservation from "./components/Reservation.jsx";
import GlobalStyle from "./globalStyles.jsx";

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <NavBar/>
      <Reservation/>
    </Fragment>
  );
}

export default App;
