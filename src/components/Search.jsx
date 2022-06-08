import React, { useEffect, useState } from 'react';
import Getinfo from '../servicios/Getinfo.jsx';
import { ContainerBtExp, ContainerExp, ContainerImg, ImgExp, TagsExp, TitleExp, GridSearch } from './styles/Styles.jsx';
import { ContainerBtExp, ContainerExp, ContainerImg, ImgExp, TagsExp, TitleExp } from './styles/Styles.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Etiquetas= ['Ubicacion', 'Transporte', 'Duracion']

export default function Search (){
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(()=>{
        setLoading(true)
        Getinfo()
            .then(data =>{ 
                setInfo(data)
                console.log(data)
                setLoading(false)
            })
    }, [])
    console.log(info)
    if (loading) return <section>Cargando...</section>

    return(
        <>
            <nav>
                {Etiquetas.map((experienciaMasPopular)=>(
                    <BrowserRouter>
                        <section key={experienciaMasPopular}>
                            <Link to={`${experienciaMasPopular}`}>{experienciaMasPopular}</Link>
                        </section>
                        <Routes>
                            <Route path='/' ></Route>
                        </Routes>
                    </BrowserRouter>
                ))}
            </nav>
            <GridSearch>      
            {     
                info.map (singleExp => 
                
                        <ContainerExp> 
                            <ContainerImg>
                                <ImgExp src={singleExp.img}/>
                                <TitleExp>{singleExp.titulo}</TitleExp>
                            </ContainerImg>

                            <section>
                                <ContainerBtExp>
                                    <button>{singleExp.Ubicacion}</button>
                                    <button>{singleExp.Transporte}</button>
                                    <button>{singleExp.Duracion}</button>
                                </ContainerBtExp>
                                <TagsExp>
                                    <section>
                                        <h5>{singleExp.id}</h5>
                                        <p>{singleExp.precio}</p>
                                    </section>

                                    <a href='#'>Reserva ahora</a>
                                </TagsExp>
                            </section>
                        </ContainerExp>
                    
                )
            } 
            </GridSearch>
        </>
    )
}