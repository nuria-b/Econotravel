import React from "react";

export default function FormReservation(){

    return (
        <>
            <form>
                <>
                    <label>Nombre</label>
                    <input 
                    id='nombre' 
                    placeholder="Ingrese un nombre" 
                    type="text"/>
                    
                    <label>Apellidos</label>
                    <input 
                    id= 'apellidos' 
                    placeholder="Ingrese el/los apellido(s)" 
                    type="text"/>
                </>
            
                <label>Dirección</label>
                <input 
                id= 'direccion'  
                placeholder="Ingrese una dirreción" 
                type="text"/>

                <>
                    <label>Correo electrónico</label>
                    <input 
                    id= 'email'
                    placeholder="Ingrese un correo electrónico" 
                    type="email"/> 

                    <label>Teléfono</label>
                    <input 
                    id='telefono'  
                    placeholder="Ingrese un número de teléfono" 
                    type="text"/>
                </> 

                <label>Fecha</label>
                <input 
                id='fecha'
                placerholder="Fecha" 
                type="date"/>
            </form>

            <section>
                <h3>250€</h3>
                <h4>Experiencia reservada: {}</h4>
                <p>Cant: {}</p>
                <button>Pagar</button>
                <h5>Garantías Econotravel</h5>
                
                <form action="/action_page.php">
                    <label><input type="checkbox" checked/>99% de clientes satisfechos</label>
                    <label><input type="checkbox" checked/>Colaboradores de calidad</label> 
                    <label><input type="checkbox" checked/>Pago 100% seguro</label>
                </form> 
            </section>
        </>
    )
}