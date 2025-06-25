import { createContext, useState, useContext, useEffect, type ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';


type User = {
  sub: string;
  roles: string[];
};

type AuthContextData = {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('@ComissioApp:token');
    if (storedToken) {
      try {
        const decodedUser = jwtDecode<User>(storedToken);
        setUser(decodedUser);
        setToken(storedToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      } catch (error) {
        console.error("Token salvo é inválido", error);
        logout();
      }
    }
  }, []);

  const login = (newToken: string) => {
    try {
      const decodedUser = jwtDecode<User>(newToken);

      localStorage.setItem('@ComissioApp:token', newToken);

      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;

      setUser(decodedUser);
      setToken(newToken);
    } catch (error) {
      console.error("Falha ao decodificar o token", error);
    }
  };

  const logout = () => {
    localStorage.removeItem('@ComissioApp:token');

    delete axios.defaults.headers.common['Authorization'];

    setUser(null);
    setToken(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  return context;
};