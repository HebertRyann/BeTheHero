import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useHistory } from "react-router";
import api from "../../services/api";

interface Ong {
  id: string;
  name: string;
  password: string;
  city: string;
  uf: string;
  whatsapp: string;
}


interface AuthContextProps {
  signIn: (name: string, password: string) => Promise<void>;
  logout: () => void;
  ong: Ong | null;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {

  const [ong, setOng] = useState<Ong | null>(null);
  const router = useHistory();

  useEffect(() => {
    api.get('session').then(response => {
      setOng(response.data);
    }).catch(err => {
      console.log(err.message);
    });
  }, []);

  const signIn = useCallback(async (name: string, password: string) => {
    const response = await api.post("session", {
      name: name.toLowerCase(),
      password: password.toLowerCase()
    });

    document.cookie = `token=${response.data.token};max-age=3600`;

    setOng(response.data.ong);

    localStorage.setItem('@BeTheHero:ONG', JSON.stringify(response.data.ong));

  }, []);

  const logout = useCallback(async () => {
    localStorage.clear();
    const cookies = document.cookie.split(';');
    console.log(cookies);
    for (let index = 0; index < cookies.length; index++) {
      const cookie = cookies[index];
      document.cookie = `${cookie};max-age=${0}`       
    }
    setOng(null);
    router.push('/')
  }, [router]);

  return (
    <AuthContext.Provider value={{ signIn, ong, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if(!context) {
    throw new Error("UseAuth must be provider");
  }
  return context;
}