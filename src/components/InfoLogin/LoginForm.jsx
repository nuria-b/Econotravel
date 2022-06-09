import React from "react";
import { FlexColumn, Form1, InputForm, LabelForm } from "../styles/Styles";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Register from "../Register";

export default function LoginForm(){
    return(
        <Form1>
            <FlexColumn>
                <LabelForm>Nombre de usuario</LabelForm>
                <InputForm 
                id='nombre' 
                placeholder="Ingrese un nombre" 
                type="text"/>
                <LabelForm>Texto de ayuda (opcional)</LabelForm>
            </FlexColumn>

            <FlexColumn>
                <LabelForm>Contraseña</LabelForm>
                <InputForm 
                id= 'apellidos' 
                placeholder="Ingrese el/los apellido(s)" 
                type="password"/>
                <LabelForm>Texto de ayuda (opcional)</LabelForm>
            </FlexColumn>

            <FlexColumn>
                <LabelForm>Repita contraseña</LabelForm>
                <InputForm 
                id= 'apellidos' 
                placeholder="Ingrese el/los apellido(s)" 
                type="password"/>
                <LabelForm>Texto de ayuda (opcional)</LabelForm>
            </FlexColumn>

            <BrowserRouter>
                <Link to='/' className="link">Register</Link>

                <p>Haz click <Link to='/register' className="link">aquí</Link>, si todavia no te has resgistrado</p>

                <Routes>
                    <Route path='/register'  element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </Form1>
    )
}
