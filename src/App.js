import React, { Fragment } from "react";
import NavBar from "./components/NavBar.jsx";
import GlobalStyle from "./globalStyles.jsx";
import Search from './components/Search.jsx';
import WhoWeAre from "./components/InfoFooter/WhoWeAre.jsx";

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <NavBar/>
      <Search/>
      <WhoWeAre/>
    </Fragment>
  );
}

export default App;
