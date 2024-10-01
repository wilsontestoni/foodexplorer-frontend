import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoExplorer from "../../assets/logo-explorer.svg";
import {
  PageContainer,
  LoginContainer,
  FormContainer,
  Anchor,
  Title,
} from "../SignIn/styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

export function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleUserSignup(e) {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };

    await signUp(userData);

    navigate("/");
  }

  return (
    <PageContainer>
      <LoginContainer>
        <img src={logoExplorer} alt="" />

        <FormContainer onSubmit={handleUserSignup}>
          <Title>Crie sua conta</Title>

          <Input
            id="name"
            labelText="Seu nome"
            type="text"
            placeholder="Exemplo: Maria da Silva"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <Input
            id="email"
            labelText="Email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <Input
            id="password"
            labelText="Senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
            minLength={7}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button type="submit">Cadastrar</Button>

          <Anchor to={".."}>Já tenho uma conta</Anchor>
        </FormContainer>
      </LoginContainer>
    </PageContainer>
  );
}
