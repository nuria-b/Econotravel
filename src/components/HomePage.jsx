import React from "react";
import { HomeStyle, Publicidad, PublicidadButton, Oferta, OfertaButton, OfertaText, Buttons } from "./styles/Styles";
export default function HomePage(){
    return(
        <HomeStyle>
            <Publicidad>
                <PublicidadButton>Descubre más</PublicidadButton>
            </Publicidad>
            <section>
            </section>
            <section>
                <img src=""/>
                <section>
                    <h2> Travel Any Corner of The World With Us</h2>
                    <p>World, let's find the best destination in the world with us. Would you explore nature paradise in the world, let's find the best destination in the world with us. Would you explore nature paradise in the world, let's find the best destination in the world with us.     Would you explore nature paradise in the world, let's find the best destination in the world with us.</p>
                    <Buttons>Contáctanos</Buttons>
                </section>
            </section>
            <Oferta>
                <OfertaText>No te lo pierdas, regístrate hoy y recibe un 25% de descuento en tu próxima experiencia</OfertaText>
                <OfertaButton>Regístrate Hoy</OfertaButton>
            </Oferta>
        </HomeStyle>
    )
}







