import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { useValidate } from '../UseValidate';


const ProtectedRoute = ({ children }) => {

  const { isLoggedIn, setIsLoggedIn , isReg} = useValidate();

  // if (isReg) {
    
  // }

  return isReg ? children : <Navigate to="/CheckOut" />;

  
};


export default ProtectedRoute






















