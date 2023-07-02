import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';
import React from 'react'

const ProtectedRoutes = ({children, isAdmin}) => {
    const { isAuthenticated, loading, user } = useSelector(state => state.AuthState)
    if(!isAuthenticated && !loading) {
        return <Navigate to="/admin/login" />
    }

    if(isAuthenticated) {
        if( isAdmin === true  && user.role === 'admin') {
            return <Navigate to="/" />
        }
        return children;
    }
}

export default ProtectedRoutes