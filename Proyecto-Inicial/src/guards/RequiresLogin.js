import React, { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

function RequiresLogin ({children}) {
    const authContext = useContext(AuthContext);

    if (!authContext.isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return children
}

// High order component (HOC)
function requiresLogin (WrappedComponent) {

    return function RequiresLoginComponent (props) {
        const authContext = useContext(AuthContext);

        if (!authContext.isLoggedIn) {
            return <Navigate to={'/login'}/>
        }

        return <WrappedComponent {...props}/>
    }
}

export default RequiresLogin
