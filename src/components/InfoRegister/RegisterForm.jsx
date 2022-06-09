import React from "react";
import { FlexColumn, InputForm, LabelForm, Form1 } from "../styles/Styles";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from "../Login";

export default function RegisterForm(){
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

            <BrowserRouter>
                <Link to='/' className="link">Register</Link>

                <p>Haz click <Link to='/login' className="link">aquí</Link>, si ya te has resgistrado</p>

                <Routes>
                    <Route path='/login'  element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </Form1>
    )
}
