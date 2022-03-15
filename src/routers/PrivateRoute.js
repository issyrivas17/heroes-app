import React from 'react'
import { Navigate } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { Children } from 'react/cjs/react.production.min';

import { AuthContext } from '../auth/authContext';


export const PrivateRoute = ({children}) => {

 const {user} = useContext(AuthContext);  

 return user.logged 
 ? Children 
 : <Navigate to = "/login" />  
}
