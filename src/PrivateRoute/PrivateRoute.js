import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    return (
        <div>
            {
                user && user.uid?
                children 
                : 
                <Navigate to='/signin'></Navigate>
            }
        </div>
    );
};

export default PrivateRoute;