import React, { useEffect, useState } from 'react';
import Getinfo from '../servicios/Getinfo.jsx';
import { ContainerBtExp, ContainerExp, ContainerImg, ImgExp, TagsExp, TitleExp, GridSearch, FilterExp } from './styles/Styles.jsx';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown.jsx';

const Etiquetas= ['Ubicacion', 'Transporte', 'Duracion']
const Desplegables=[{titulo:'Ubicación', valores:['Montaña','Ciudad','Playa']},{titulo:'Transporte', valores:['Bicicleta','A pie','Barco']},{titulo:'Duración', valores:['Excursión corta','Excursión larga']}]

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
                {Desplegables.map((desplegableEtiqueta)=>(
                    <section key={desplegableEtiqueta.titulo}>
                    <Dropdown label={`${desplegableEtiqueta.titulo}`} options={desplegableEtiqueta.valores.map(valor=>({value:valor,label:valor}))}/>
                    </section>
                ))}
            </FilterExp> 

            <GridSearch>      
                {     
                    info.map ((singleExp, i)=> 
                        <ContainerExp key={i}> 
                            <ContainerImg>
                                <ImgExp src={singleExp.img} alt={singleExp.titulo}/>
                                <TitleExp className='titlexp'>{singleExp.titulo}</TitleExp>
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