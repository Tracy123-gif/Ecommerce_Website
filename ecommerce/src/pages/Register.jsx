import React, { useEffect } from 'react';
import Navbar from '../Components/sectionContent/Navbar';
import image from '../assets/image33.jpg';
import { useValidate } from '../UseValidate';
import { useLocation, useNavigate } from 'react-router-dom';
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

  const location = useLocation()



  useEffect(() => {
    if (isReg) {
      navigate('/');
    }
  }, [isReg, navigate]);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(SignupSchema) });

  return (
    <div>
      <div className='p-3 bg-[#183B4E]'>
        <Navbar />
      </div>


      <div className=" py-1 max-w-4xl m-auto   flex justify-center items-center">
        <div className="container ">
          <div className="form w-full  flex h-[470px] border-black  border-2  rounded-md ">
            <div className="formLeft bg-[#183B4E] p-8 h-full w-1/2 m-auto">
              {/* header */}
              <h1 className='text-4xl text-center py-4 text-white'>Register</h1>

              {/* form container */}
              <div className='formContainer '>
                <form onSubmit={handleSubmit(onRegister)}>

                  {/* Full Name Field */}
                  <input 
                    placeholder='Full Name' 
                    type="text" 
                    {...register('name')}  // Register the name input
                  />
                  {errors.name && <p className='text-red-500 '>{errors.name.message}</p>} 

                  {/* Email Field */}
                  <input 
                    placeholder='Email Address' 
                    type="email" 
                    {...register('email')}
                  />
                  {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                  {/* Password Field */}
                  <input 
                  
                    placeholder='Password' 
                    type="password" 
                    {...register('password')}
                  />
                  {errors.password && <p className='text-red-500 '>{errors.password.message}</p>}

                

                  <button
                    className='w-full p-3 rounded-md submit border-2 border-black bg-black text-white hover:bg-[#316371] block'
                    type="submit"
                    value="Submit"
                  >Submit</button>
                </form>
              </div>
            </div>

          <div className="relative overflow-hidden -z-10 formRight h-full w-1/2">
            <img className="w-full h-full object-cover" src={image} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
