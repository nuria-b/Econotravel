import React from 'react';
import Marina from '../../images/quienes-somos.jpg'
import { ProfileW, ContainerW,  InfoW } from '../styles/Styles';

export default function WhoWeAre(){
    return(
        <ContainerW>
            <ProfileW>
                <img src={Marina}/>
                <span>Marina Herrán </span>
                <span>Fundadora de Econotravel</span>
            </ProfileW>
            <InfoW>
                <section>
                    <h2>Misión</h2>
                    <p>Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de Cataluña.</p>
                    <p>Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.</p>
                </section>
                <section>
                    <h2>Contacto</h2>
                    <h3>Correo:</h3>
                    <p>info@econotravel.com</p>
                    <h3>Dirección:</h3>
                    <p>Carrer dels Viatgers, 28, 08001 Barcelona</p>
                </section>
            </InfoW>
        </ContainerW>

    )
}