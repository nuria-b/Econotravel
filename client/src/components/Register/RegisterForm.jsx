import React from "react";
import { FlexColumn, InputForm, LabelForm, Form1 } from "../styles/Styles";
import { Link } from "react-router-dom";

export default function RegisterForm(){
    return(
        <Form1>
            <FlexColumn>
                <LabelForm>Nombre de usuario</LabelForm>
                <InputForm id='nombre' placeholder="Ingrese un nombre" type="text"/>
                <LabelForm>Texto de ayuda (opcional)</LabelForm>
            </FlexColumn>

            <FlexColumn>
                <LabelForm>Correo electrónico</LabelForm>
                <InputForm id='email' placeholder="Ingrese un correo electrónico" type="email"/>
                <LabelForm>Texto de ayuda (opcional)</LabelForm>
            </FlexColumn>

            <FlexColumn>
                <LabelForm>Contraseña</LabelForm>
                <InputForm id= 'contraseña' placeholder="Ingrese una contraseña" type="password"/>
                <LabelForm>Texto de ayuda (opcional)</LabelForm>
            </FlexColumn>
            
            <FlexColumn>
                <LabelForm>Confirme su contraseña</LabelForm>
                <InputForm id= 'chequearcontraseña' placeholder="Ingrese nuevamente su contraseña" type="password"/>
                <LabelForm>Texto de ayuda (opcional)</LabelForm>
            </FlexColumn> 

                <Link to='/' className="link">Register</Link>

                <p>Haz click <Link to='/login' className="link">aquí</Link>, si ya te has resgistrado</p>
        </Form1>
    )
}
