import React from 'react';
import {ImgExp, TitleExp, ContainerExp, TagsExp, ContainerBtExp} from './styles/Styles.jsx';

const Etiquetas= ['Ubicacion', 'Transporte', 'Duracion']

export default function Search (){
    return(
        <>
        <nav>
            {Etiquetas.map((experienciaMasPopular)=>(
                <section key={experienciaMasPopular}>
                    <a href={`${experienciaMasPopular}`}>{experienciaMasPopular}</a>
                </section>
            ))}
        </nav>
        <ContainerExp>
            <ImgExp>
                <TitleExp>Título</TitleExp>
            </ImgExp>
            <section>
                <ContainerBtExp>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </ContainerBtExp>
                <TagsExp>
                    <section>
                        <h5>Título</h5>
                        <p>Precio</p>
                    </section>
                    <a>Reserva ahora</a>
                </TagsExp>
            </section>
        </ContainerExp>
        </>
    )
}