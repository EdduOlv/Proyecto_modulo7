import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../contexts/users/UserContext';

export const AuthRoute = ({ element: Component, ...props }) => {
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
        return null; // AGREGAR UN LOADING DE CARGA MAS ADELANTEs
    }

    return authStatus ? <Navigate to="/perfil" /> : <Component {...props} />;
}