import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Search from "./components/Search.jsx";
import Reservation from "./components/Reservation.jsx";
import Register from "./components/Register";
import Login from "./components/Login.jsx";
import WhoWeAre from './components/InfoFooter/WhoWeAre.jsx';
import HowDoesItWork from './components/InfoFooter/HowDoesItWork.jsx';
import PaymentMethods from './components/InfoFooter/PaymentMethods.jsx';
import Details from "./components/Details";

export default function Router() {
    return(
        <>
                <Routes>
                    <Route exact path='/' element={<HomePage />}/>
                    <Route exact path='/search' element={<Search />}></Route>
                    <Route exact path='/detail/:id' element={<Details />}/>
                    <Route exact path='/login' element={<Login />}/>
                    <Route exact path='/register' element={<Register />}/>
                    <Route exact path='/reservation' element={<Reservation />}/>
                    <Route exact path='/howdoesitwork' element={<HowDoesItWork />}/>
                    <Route exact path='/whoweare' element={<WhoWeAre />}/>
                    <Route exact path='/paymentmethods' element={<PaymentMethods />}/>
                </Routes>
        </>
  )
}