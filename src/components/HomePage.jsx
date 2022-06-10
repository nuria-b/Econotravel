import React from "react";
import { HomeStyle, Publicidad, PublicidadButton, Oferta, OfertaButton, OfertaText, Buttons, ImgTravel, ContainerTravel, TxtTravel } from "./styles/Styles";
import { Link } from "react-router-dom";
import Travel from '../images/travel.avif';

export default function HomePage(){
    return(
        <HomeStyle>
            <Publicidad>
                <Link to='/search'><PublicidadButton>Descubre más</PublicidadButton></Link>
            </Publicidad>
            <ContainerTravel>
                <ImgTravel src={Travel}/>
                <TxtTravel>
                    <h2> Travel Any Corner of The World With Us</h2>
                    <p>World, let's find the best destination in the world with us. Would you explore nature paradise in the world, let's find the best destination in the world with us. Would you explore nature paradise in the world, let's find the best destination in the world with us.     Would you explore nature paradise in the world, let's find the best destination in the world with us.</p>
                    <Link to='/whoweare'><Buttons>Contáctanos</Buttons> </Link>
                </TxtTravel>
            </ContainerTravel>
            <Oferta>
                <OfertaText>No te lo pierdas, regístrate hoy y recibe un 25% de descuento en tu próxima experiencia</OfertaText>
                <Link to='/search'><OfertaButton>Regístrate Hoy</OfertaButton></Link>
            </Oferta>
        </HomeStyle>
    )
}