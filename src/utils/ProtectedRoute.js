import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserAuth } from './userAuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useUserAuth(null);
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={{ path: location.pathname }} />;
    }
    return children;
};

export default ProtectedRoute;