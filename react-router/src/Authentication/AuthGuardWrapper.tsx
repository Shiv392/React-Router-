import React, { Children } from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuardWrapper=({children})=>{

const token=localStorage.getItem('token');
if(!token){
    return <Navigate to='/' replace />
}
return children;
}
export default AuthGuardWrapper;