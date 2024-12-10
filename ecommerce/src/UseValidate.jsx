import React, {createContext, useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {set} from 'zod';

// Create the context
const ValidateContext = createContext();

// Custom hook to use the ValidateContext
export const useValidate = () => useContext(ValidateContext);

// ValidateProvider component to wrap around your app
export const ValidateProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState({email: '', password: ''});

    const [userRegDetails, setUserRegDetails] = useState(
        {name: '', email: '', password: ''}
    )
    const [isReg, setIsReg] = useState(false)

    const onSubmit = (data) => {
        const {email, password} = data;

        setUserDetails({email, password});
        console.log('Form Data:', data);
        setIsLoggedIn(true); // Update login status
        console.log(isLoggedIn)
    };

    const onRegister = (data) => {
        const {name, email, password} = data
        setUserRegDetails({name, email, password})
        setIsLoggedIn(true)
        console.log(userRegDetails);
        setIsReg(true)
    }
   const logout  = ()=>{
    setIsReg(false)
   }

   
    // }
    // const navigate = useNavigate()
    // useEffect(()=>{
    //   navigate('/')
    //  }, [confirmLogout])
    // const checkOut = (data) => {
    //     // You can access the submitted form data here
    //     console.log('Checkout successful', data);
    //     // Your API call or checkout logic can go here

    //     return {checkOut};
    // };

    // Function to handle login const login = (userData) => {   setIsLoggedIn(true);
    // store user information or a token in local storage/session storage };
    
    return (
        <ValidateContext.Provider
            value={{
                isLoggedIn,
                onSubmit,
                userDetails,
                onRegister,
                userRegDetails,
                setUserRegDetails,
                isReg,
                logout
           
                // confirmLogout,
                // showModal,
                // setShowModal
            }}>
            {children}
        </ValidateContext.Provider>
    );
};
