import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../contexts/users/UserContext';

export const PrivateRoute = ({ element: Component, ...props }) => {
    const userCtx = useContext(UserContext);
    const { authStatus, verifyingToken } = userCtx;
  

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verify = async () => {
            
            await verifyingToken();
            setLoading(false);
        };
        verify();
    }, [authStatus]);

    if (loading) {
        return null; // CONFIGURAR MAS ADELANTE UN SPINNER DE CARGA
    }

    return authStatus ? <Component {...props} /> : <Navigate to="/" />;
}
