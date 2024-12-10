import React from 'react'
import image from '../../assets/image29.jpg'
import { Link } from 'react-router-dom'

const Sec3 = () => {
  return (
    <div className='sec3 px-20 py-20 max-sm:300px flex justify-center items-center '>
      <div className="secCon flex w-full ">
        <div className="secConImg w-2/4  max-md:w-0 max-sm:w-0 ">
            <img src={image} alt="" />
        </div>
        <div className="secConTxt w-1/2 max-lg:w-2/4 max-md:p-10 max-md:w-full flex flex-col justify-center items-center gap-3 p-6 max-sm:w-full"> 
            <p className='font-semibold text-lg'>SALE EVENT</p>
            <h1 className='font-medium text-4xl'>Summer Shirt</h1>
            <h1 className='font-medium text-4xl'>Limited Offer – $20</h1>
            <p className='font-normal text-lg text-slate-700'>Until 12/27/21. Use code FESTIVE at checkout</p>
            <button className='text-white font-semibold text-lg px-6 py-2 bg-slate-950 rounded my-4'><Link to={'/shop'}>Shop Now</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Sec3
