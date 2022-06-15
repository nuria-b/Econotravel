import React, { useState } from "react";
import logo from '../images/logo.png'
import {GiGorilla} from 'react-icons/gi';
import {BiSearchAlt} from 'react-icons/bi';
import {FaShoppingBasket} from 'react-icons/fa';
import {GrFormClose} from 'react-icons/gr';
import { IconContext } from 'react-icons';
import { FlexRow, NavStyle, SearchBar } from '../components/styles/Styles.jsx';
import { Link } from "react-router-dom";

export default function NavBar(){
    const [keyword, setKeyword]= useState('')

    const handleSubmit = e =>{
        e.preventDefault()
    }

    const handleFilter = e =>{
        setKeyword(e.target.value)
    }

    return(
        <header>
           <NavStyle>
                <Link to='/'><img src={logo} alt='Logo'/></Link>
                
                <IconContext.Provider value={{ size:'2.5em', color:'var(--bg-img-nav)' }}>
                    <form onSubmit={ handleSubmit }>
                        <SearchBar> 
                                <input onChange={ handleFilter } type='text' placeholder='Busca una actividad, un lugar,...' id='search' value={keyword}/>
                                <button htmlFor='search'>
                                    {!keyword.length ? <BiSearchAlt /> : <GrFormClose/>}
                                </button>   
                        </SearchBar>
                    </form>

                    <FlexRow>
                        <Link to='/login'><button><GiGorilla /></button></Link>
                        <button><FaShoppingBasket /></button>
                    </FlexRow>
                </IconContext.Provider>
            </NavStyle>        
        </header>
    )
}