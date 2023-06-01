import React, { Children, useContext } from 'react';

import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return (
            <div className='w-full h-screen grid place-content-center text-center'>
                <div>
                    <p>Loading...</p>
                    <progress className="progress w-56 mx-auto"></progress>
                </div>
            </div>
        )
    }

    if (user?.email) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;