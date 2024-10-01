/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  name?: string;
  email: string;
  password: string;
}

interface UserDataFromServer {
  id: number;
  name: string;
  role: string;
}

interface AuthContextTypes {
  signIn: ({ email, password }: User) => Promise<void>;
  signUp: ({ name, email, password }: User) => Promise<void>;
  signOut: () => void;
  user: UserDataFromServer | null;
}

const AuthContext = createContext({} as AuthContextTypes);

function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<UserDataFromServer | null>(null);

  async function signIn({ email, password }: User) {
    const userData = {
      email,
      password,
    };

    try {
      const response = await api.post("/sessions", userData, {
        withCredentials: true,
      });

      const { user } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      setUserData(user);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert(
        "Não foi possível efetuar o login na plataforma, tente novamente mais tarde"
      );
    }
  }

  async function signUp({ name, email, password }: User) {
    const userData = {
      name,
      email,
      password,
    };

    try {
      await api.post("/users", userData);
      alert("Cadastro feito com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert(
        "Não foi possível efetuar o cadastro na plataforma, tente novamente mais tarde"
      );
    }
  }

  async function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    setUserData(null);
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("@foodexplorer:user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
        user: userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
