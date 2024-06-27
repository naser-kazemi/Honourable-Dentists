import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        token: null,
        user: null,
    });

    const login = (user, token) => {
        setAuthState({
            isAuthenticated: true,
            token,
            user,
        });
    };

    const logout = () => {
        setAuthState({
            isAuthenticated: false,
            token: null,
            user: null,
        });
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
