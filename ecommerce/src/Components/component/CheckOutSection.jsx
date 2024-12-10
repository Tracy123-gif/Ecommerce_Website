import React from 'react'
import { Link } from 'react-router-dom'
import { useValidate } from '../../UseValidate'

const CheckOutSection = () => {

  const { isLoggedIn, isReg  } = useValidate()
  return (
    <div className='w-full h-20 flex justify-center items-center'>
      <Link className='w-full h-1/2 p-6 text-center bg-black text-white border border-black flex items-center justify-center hover:bg-transparent hover:text-black transition-all duration-300' to={ `${isReg ? '/checkOut' : '/Register'}`}>Check Out</Link>
    </div>
  )
}

export default CheckOutSection
