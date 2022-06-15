import React from 'react';
import { Link } from 'react-router-dom';
import { FooterElements } from '../components/styles/Styles.jsx';

export default function Footer(){
    return(
        <footer>
            <FooterElements>
                <Link to='/howdoesitwork' className='link'>¿Cómo funciona?</Link>
                <Link to='/whoweare'  className='link'>¿Quiénes somos?</Link>
                <Link to='/paymentmethods'  className='link'>Medios de pago</Link>
            </FooterElements>  
        </footer>
    )
}