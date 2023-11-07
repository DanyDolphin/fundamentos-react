import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({
    isLoggedIn: false
})

export const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = async (email) => {
        const url = `https://react-bedu-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo="${email}"`
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error del servidor, comunicate con un asesor.');
        }

        const responseData = await response.json();
        console.log(responseData)
        return responseData;
    }

    const onLogin = async (email, password) => {
        try {
            const result = await loginHandler(email);

            if (Object.values(result).length === 0) {
                alert('El usuario no existe. Intenta de nuevo');
            } else {
                const id = Object.keys(result)[0];
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('userId', id);
                setIsLoggedIn(true);
            }
        } catch (err) {
            alert(err.message);
            console.log(err.message);
        }
    }

    const onLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userId');
        setIsLoggedIn(false)
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
                onLogin,
                onLogout
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;