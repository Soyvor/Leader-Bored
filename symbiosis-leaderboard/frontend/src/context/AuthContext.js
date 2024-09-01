import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (email, password) => {
        // Add authentication logic here
        console.log('Logging in:', email, password);
        setIsAuthenticated(true); // This should be based on actual authentication result
    };

    const logout = () => {
        // Add logout logic here
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};