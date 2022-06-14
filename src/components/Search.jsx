import React, { useEffect, useState } from 'react';
import Getinfo from '../servicios/Getinfo.jsx';
import { ContainerBtExp, ContainerExp, ContainerImg, ImgExp, TagsExp, TitleExp, GridSearch, FilterExp } from './styles/Styles.jsx';
import { Link } from 'react-router-dom';

const Etiquetas= ['Ubicacion', 'Transporte', 'Duracion']

export default function Search (){
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)

     useEffect(()=>{
        setLoading(true)
        Getinfo.getAll()
        .then(res =>{ 
                setInfo(res)
                setLoading(false)
            })
    }, [])

    if (loading) return <section>Cargando...</section>

    return(
        <>
            <h1> Experiencias en el área de Barcelona</h1>

            <FilterExp>
                {Etiquetas.map((experienciaMasPopular)=>(
                    <section key={experienciaMasPopular}>
                        <Link to={`${experienciaMasPopular}`} className='link'>{experienciaMasPopular}</Link>
                    </section>
                ))}
            </FilterExp> 

            <GridSearch>      
                {     
                    info.map ((singleExp, i)=> 
                        <ContainerExp key={i}>
                            <Link to={`/detail/${i}`}> 
                                <ContainerImg>
                                    <ImgExp src={singleExp.img} alt={singleExp.titulo}/>
                                    <TitleExp className='titlexp'>{singleExp.titulo}</TitleExp>
                                </ContainerImg>
                            </Link>
                            
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
                                    
                                    <Link to='/' className='link'>Reserva ahora</Link>      
                                </TagsExp>
                            </section>
                        </ContainerExp>
                    )
                } 
            </GridSearch>
        </>
    )
}