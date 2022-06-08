import React, { useEffect, useState } from 'react';
import Getinfo from '../servicios/Getinfo.jsx';
import { ContainerBtExp, ContainerExp, ContainerImg, ImgExp, TagsExp, TitleExp, FilterExp } from './styles/Styles.jsx';
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
                setLoading(false)
            })
    }, [])

    if (loading) return <section>Cargando...</section>

    return(
        <>
            <section>
                <h1> Experiencias en el área de Barcelona</h1>

                <FilterExp>
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
                </FilterExp> 

                {     
                    info.map (singleExp => 
                        <ContainerExp> 
                            <ContainerImg>
                                <ImgExp src={singleExp.img} alt={singleExp.titulo} />
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

                                    <BrowserRouter>
                                        <Link to=''>Reserva ahora</Link>
                                        
                                        <Routes> 
                                            <Route path='/' ></Route>
                                        </Routes>
                                    </BrowserRouter>
                                </TagsExp>
                            </section>
                        </ContainerExp>
                    )
                } 
            </section>
        </>
    )
}