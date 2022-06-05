import React from "react";
import {Buttons, FlexColumn, FlexRow, Form1, Form2, FormStyle, Checkbox, InputForm, LabelCheck, LabelForm } from "./styles/Styles.jsx";

export default function FormReservation(){
    return (
        <FormStyle>
            <Form1>
                <FlexRow>
                    <FlexColumn>
                        <LabelForm>Nombre</LabelForm>
                        <InputForm 
                        id='nombre' 
                        placeholder="Ingrese un nombre" 
                        type="text"/>
                        <LabelForm>Texto de ayuda (opcional)</LabelForm>
                    </FlexColumn>

                    <FlexColumn>
                        <LabelForm>Apellidos</LabelForm>
                        <InputForm 
                        id= 'apellidos' 
                        placeholder="Ingrese el/los apellido(s)" 
                        type="text"/>
                        <LabelForm>Texto de ayuda (opcional)</LabelForm>
                    </FlexColumn>
                </FlexRow>

                <FlexColumn>
                    <LabelForm>Dirección</LabelForm>
                    <InputForm
                    id= 'direccion'  
                    placeholder="Ingrese una dirreción" 
                    type="text"/>
                    <LabelForm>Texto de ayuda (opcional)</LabelForm>
                </FlexColumn>

                <FlexRow>
                    <FlexColumn>
                        <LabelForm>Correo electrónico</LabelForm>
                        <InputForm 
                        id= 'email'
                        placeholder="Ingrese un correo electrónico" 
                        type="email"/> 
                        <LabelForm>Texto de ayuda (opcional)</LabelForm>
                    </FlexColumn>

                    <FlexColumn>
                        <LabelForm>Teléfono</LabelForm>
                        <InputForm 
                        id='telefono'  
                        placeholder="Ingrese un número de teléfono" 
                        type="text"/>
                        <LabelForm>Texto de ayuda (opcional)</LabelForm>
                    </FlexColumn>
                </FlexRow> 

                <FlexColumn>
                    <LabelForm>Fecha</LabelForm>
                    <InputForm 
                    id='fecha'
                    placerholder="Fecha" 
                    type="date"/>
                </FlexColumn>
            </Form1>

            <Form2>
                <h2>250€</h2>
                <h3>Experiencia reservada: {}</h3>
                <p>Cant: {}</p>
                <Buttons>Pagar</Buttons>
                <h4>Garantías Econotravel:</h4>
                
                <FlexColumn action="/action_page.php">
                    <LabelCheck><Checkbox type="checkbox" checked/>99% de clientes satisfechos</LabelCheck>
                    <LabelCheck><Checkbox type="checkbox" checked/>Colaboradores de calidad</LabelCheck> 
                    <LabelCheck><Checkbox type="checkbox" checked/>Pago 100% seguro</LabelCheck>
                </FlexColumn> 
            </Form2>
        </FormStyle>
    )
}