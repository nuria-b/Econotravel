import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import WhoWeAre from './InfoFooter/WhoWeAre.jsx';
import HowDoesItWork from './InfoFooter/HowDoesItWork.jsx';
import PaymentMethods from './InfoFooter/PaymentMethods.jsx';
import { FooterElements } from './styles/Styles.jsx';

export default function Footer(){
    return(
        <footer>
            <BrowserRouter>
                <FooterElements>
                    <Link to='/howdoesitwork' className='link'>¿Cómo funciona?</Link>
                    <Link to='/whoweare'  className='link'>¿Quiénes somos?</Link>
                    <Link to='/paymentmethods'  className='link'>Medios de pago</Link>
                </FooterElements>  
                
                <Routes>
                    <Route path='/howdoesitwork' element={<HowDoesItWork />}></Route>
                    <Route path='/whoweare' element={<WhoWeAre />}></Route>
                    <Route path='/paymentmethods' element={<PaymentMethods />}></Route>
                </Routes>
            </BrowserRouter>
        </footer>
    )
}