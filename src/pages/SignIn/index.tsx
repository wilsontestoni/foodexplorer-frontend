import React from "react";
import logoExplorer from "../../assets/logo-explorer.svg";
import {
  PageContainer,
  LoginContainer,
  FormContainer,
  Anchor,
  Title,
} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleUserSignin(e) {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    await signIn(userData);
  }

  return (
    <PageContainer>
      <LoginContainer>
        <img src={logoExplorer} alt="" />

        <FormContainer onSubmit={handleUserSignin}>
          <Title>Faça Login</Title>

          <Input
            id="email"
            labelText="Email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
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

          <Button type="submit">Entrar</Button>

          <Anchor to={"/signup"}>Criar uma conta</Anchor>
        </FormContainer>
      </LoginContainer>
    </PageContainer>
  );
}
