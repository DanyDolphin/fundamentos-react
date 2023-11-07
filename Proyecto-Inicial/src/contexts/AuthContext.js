import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({
    isLoggedIn: false
})

export const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = async (email) => {
        const url = `https://react-bedu-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalsTo="${email}"`
        const response = await fetch(url);
        const responseData = await response.json();
        console.log(responseData);
    }

    const onLogin = (email, password) => {
        loginHandler(email);
    }

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ 
                isLoggedIn,
                setIsLoggedIn,
                onLogin 
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;