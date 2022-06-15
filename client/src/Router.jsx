import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Search from "./Pages/Search.jsx";
import Reservation from "./Pages/Reservation.jsx";
import Register from "./Pages/Register";
import Login from "./Pages/Login.jsx";
import WhoWeAre from './components/Footer/WhoWeAre.jsx';
import HowDoesItWork from './components/Footer/HowDoesItWork.jsx';
import PaymentMethods from './components/Footer/PaymentMethods.jsx';
import Details from "./Pages/Details";

export default function Router() {
    return(
        <>
                <Routes>
                    <Route exact path='/' element={<HomePage />}/>
                    <Route exact path='/search' element={<Search />}></Route>
                    <Route exact path='/:id/detail' element={<Details />}/>
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