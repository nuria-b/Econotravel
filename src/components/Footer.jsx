import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import WhoWeAre from './InfoFooter/WhoWeAre.jsx';
import HowDoesItWork from './InfoFooter/HowDoesItWork.jsx';
import PaymentMethods from './InfoFooter/PaymentMethods.jsx';

export default function Footer(){
    return(
        <footer>
            <BrowserRouter>
                <nav>
                    <Link to='/howdoesitwork'>¿Cómo funciona?</Link>
                    <Link to='/whoweare'>¿Quiénes somos?</Link>
                    <Link to='/paymentmethods'>Medios de pago</Link>
                </nav>  
                
                <Routes>
                    <Route path='/howdoesitwork' element={<HowDoesItWork />}></Route>
                    <Route path='/whoweare' element={<WhoWeAre />}></Route>
                    <Route path='/paymentmethods' element={<PaymentMethods />}></Route>
                </Routes>
            </BrowserRouter>
        </footer>
    )
}