import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    
    // if(loading){
    //     return <div>Loading...</div>
    // }

    if(user){
        return children;
    }

    if(loading){
        return <div>Loading...</div>
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;