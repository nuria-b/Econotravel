import React, { useState } from "react";
import { FlexColumn, Form1, InputForm, LabelForm } from "../styles/Styles";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../servicios/auth.service";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const [user, setUser] = useState();


  const handleLogin = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    console.log(user)
    authService
      .login(user)
      .then((res) => {
        console.log(res.data);
        setUser(res.data.accessToken);
        localStorage.setItem("user", res.data.accessToken);
        if (res.data.accessToken) {
          navigation("/myprofile", { replace: true });
        }
      })
      .catch(() => setError("Hubo un error"));
  };

  return (
    <>
      <Form1>
        <FlexColumn>
          <LabelForm htmlFor="email">Correo electrónico</LabelForm>
          <InputForm
            id="email"
            placeholder="Ingrese su correo electrónico"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LabelForm>Texto de ayuda (opcional)</LabelForm>
        </FlexColumn>

        <FlexColumn>
          <LabelForm htmlFor="password">Contraseña</LabelForm>
          <InputForm
            id="password"
            placeholder="Ingrese su contraseña"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LabelForm>Texto de ayuda (opcional)</LabelForm>
        </FlexColumn>

        <button onClick={handleSubmit}>Iniciar sesión</button>

        <p>
          Haz click{" "}
          <Link to="/register" className="link">
            aquí
          </Link>
          , si todavia no te has resgistrado
        </p>
      </Form1>
      {error}
    </>
  );
}
