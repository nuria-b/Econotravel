import React from 'react';

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
            <section>
                <p></p>
            </section>
            <section>
                <section>
                    <button></button>
                    <button></button>
                    <button></button>
                </section>
                <section>
                    <section>
                        <h5></h5>
                        <p></p>
                    </section>
                    <section>
                        <a>Reserva ahora</a>
                    </section>
                </section>
            </section>
        </>
    )
}