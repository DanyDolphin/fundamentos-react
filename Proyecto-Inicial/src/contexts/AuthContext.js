import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({
    isLoggedIn: false
})

export const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;