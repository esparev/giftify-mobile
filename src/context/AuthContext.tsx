import React, { useState, createContext } from 'react';
import { AuthProviderProps, AuthContextProps } from '../@types';

// Create context
export const AuthContext = createContext<{
  auth: AuthContextProps | undefined;
  login: (userData: AuthContextProps) => void;
  logout: () => void;
}>({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

// Provider
// Actions of the context
export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const [auth, setAuth] = useState<AuthContextProps>();

  const login = (userData: AuthContextProps) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(undefined);
  };

  const valueContext = { auth, login, logout };

  return <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  
};
