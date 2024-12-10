import React, { useEffect } from 'react';
import Navbar from '../Components/sectionContent/Navbar';
import image from '../assets/image7.jpg';
import { useValidate } from '../UseValidate';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchema } from '../ValidateSignUp';

const Register = () => {
  const {
    onRegister,
    userRegDetails,
    setUserRegDetails,
    setIsLoggedIn,
    isReg,
    setIsReg
  } = useValidate();

  const navigate = useNavigate();

  useEffect(() => {
    if (isReg) {
      navigate('/');
    }
  }, [isReg, navigate]);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(SignupSchema) });

  return (
    <div>
      <div className='p-4'>
        <Navbar />
      </div>
      <div className="px-32 py-1 background w-full flex justify-center items-center h-full">
        <div className="container border-2 border-black rounded-md">
          <div className="form w-full h-full flex gap-4">
            <div className="formLeft primary p-8 h-full w-1/2">
              {/* header */}
              <h1 className='text-4xl py-4'>Register</h1>

              {/* form container */}
              <div className='formContainer'>
                <form onSubmit={handleSubmit(onRegister)}>

                  {/* Full Name Field */}
                  <input 
                    placeholder='Full Name' 
                    type="text" 
                    {...register('name')}  // Register the name input
                  />
                  {errors.name && <p className='text-red-500 bg-white'>{errors.name.message}</p>} 

                  {/* Email Field */}
                  <input 
                    placeholder='Email Address' 
                    type="email" 
                    {...register('email')}
                  />
                  {errors.email && <p className='text-red-500 bg-white'>{errors.email.message}</p>}

                  {/* Password Field */}
                  <input 
                    placeholder='Password' 
                    type="password" 
                    {...register('password')}
                  />
                  {errors.password && <p className='text-red-500 bg-white'>{errors.password.message}</p>}

                  <div className='checkbox'>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" required>
                      I agree to the terms of conditions and privacy policy
                    </label>
                  </div>

                  <button
                    className='w-4/5 p-3 rounded-md submit border-2 border-black bg-black text-white hover:bg-white block'
                    type="submit"
                    value="Submit"
                  >Submit</button>
                </form>
              </div>
            </div>

            <div className="relative overflow-hidden -z-10 formRight h-full w-1/2 object-cover">
              <img width={'100%'} height={'inherit'} className='blur-sm' src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
