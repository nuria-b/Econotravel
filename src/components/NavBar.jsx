import React from "react";
import logo from '../images/logo.png'
import {GiGorilla} from 'react-icons/gi';
import {BiSearchAlt} from 'react-icons/bi';
import {FaShoppingBasket} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { FlexRow, NavStyle, SearchBar } from './styles/Styles.jsx';

export default function NavBar(){
    return(
        <header>
           <NavStyle>
                <img src={logo} alt='Logo'/>
                
                <IconContext.Provider value={{ size:'2em', color:'var(--bg-img-nav)' }}>
                    <form>
                        <SearchBar> 
                                <input 
                                type='text' 
                                placeholder='Busca una actividad, un lugar,...' 
                                id='search'/>
                                <button for='search'><BiSearchAlt for='search'/></button>   
                        </SearchBar>
                    </form>

                    <FlexRow>
                        <button><GiGorilla /></button>
                        <button><FaShoppingBasket /></button>
                    </FlexRow>
                </IconContext.Provider>
            </NavStyle>        
        </header>
    )
}