import React, {useContext, useEffect} from 'react';
import Navbar from '../Components/sectionContent/Navbar';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {loginSchema} from '../ValidateLogin'; // Ensure this file exists
import {zodResolver} from '@hookform/resolvers/zod';
import {useValidate} from '../UseValidate'; // Custom hook for validation context

const Login = () => {
    const {isLoggedIn, setIsLoggedIn, onSubmit, userDetails} = useValidate();
    console.log(userDetails);

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/checkout'); // Navigate to the protected route
        }
    }, [isLoggedIn, navigate]);

    const {register, handleSubmit, formState: {
            errors
        }} = useForm({resolver: zodResolver(loginSchema)});

      


    return (
        <div className='h-vh'>
            <div className='py-3 px-6'>
                <Navbar/>
            </div>

            <div className='flex justify-center items-center h-screen'>
                <div
                    className='primary w-96 p-6 text-center m-auto rounded-2xl shadow-lg border-black border'>
                    <div className='text-left'>
                        <h1 className='text-center m-4 text-3xl text-white'>Login</h1>
                        <form className='flex flex-col gap-8 w-10/12' onSubmit={handleSubmit(onSubmit)}>

                            <label>
                                Email:
                                <br/>
                                <input
                                    className='w-80 h-10 border rounded-xl p-5'
                                    type='text'
                                    placeholder='Your Email'
                                    {...register('email')}/> {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </label>
                            <label>

                                Password:

                                <br/>
                                <input
                                    className='w-80 h-10 border p-5 rounded-xl'
                                    type='password'
                                    placeholder='Your Password'
                                    {...register('password')}/> {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                            </label>
                            <button
                                type='submit'
                                className='bg-black text-white p-3 rounded-xl hover:bg-white hover:text-black transition-all duration-300 border border-black relative '>
                                Login
                            </button>
                            <div className='text-center'>
                                Don't have an account?
                                <Link to='/signup' className='text-white hover:text-black'>
                                    Sign Up
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
