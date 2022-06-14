import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ReadMore } from "./Detail/ReadMore.jsx"
import { Breadcrumbs, Buttons, Crumb, FlexColumn, InfoDetail, DetailReser, ImgDetail, ContainerDetail } from "./styles/Styles.jsx"
import Getinfo from '../servicios/Getinfo.jsx';

export default function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        Getinfo.getAll()
        .then(res =>{ 
                setLoading(false)
            })
    }, [])

    if (loading) return <section>Cargando...</section>
    return(
        <ContainerDetail>
            <Breadcrumbs>
                <Crumb><Link to="/">Home</Link></Crumb>
                <Crumb><Link to="/search">Search</Link></Crumb>
                <Crumb>{id.titulo}</Crumb>
            </Breadcrumbs>

            <h1>{id.titulo}</h1>

            <InfoDetail>
                <FlexColumn>
                    <ImgDetail src={id.img} alt={id.titulo}/>
                    <span>{id.titulo}</span>
                </FlexColumn>

                <ReadMore>
                    <p>{id.descripcion}</p>
                    <p>{id.accesibilidad}</p>
                    <p>{id.duracion}</p>
                </ReadMore>
                   
                <DetailReser>
                    <h2>{id.precio}</h2>
                    <label for="quantity">Cant:  <input type="number" id="quantity" min="1" max="20"/></label>
                    <Link to="/search"><Buttons type="submit">Reservar</Buttons></Link>
                </DetailReser>
            </InfoDetail>
        </ContainerDetail>
    )
}