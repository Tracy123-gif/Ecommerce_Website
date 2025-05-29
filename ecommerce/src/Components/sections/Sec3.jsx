import React from 'react'
import image from '../../assets/image30.jpg'
import { Link } from 'react-router-dom'

const Sec3 = () => {
  return (
    <div className='sec3 px-20 py-20 max-sm:300px flex justify-center items-center '>
      <div className="secCon flex w-full h-[400px] ">


        <div className="secConImg w-1/2 relative h-full overflow-hidden ">
            <img className='w-full absolute' src={image} alt="" />
        </div>


        <div className="secConTxt w-1/2 max-lg:w-2/4 max-md:p-10 max-md:w-full flex flex-col justify-center items-center gap-3 p-6 max-sm:w-full text-white"> 
            <p className='font-semibold text-lg text-white'>SALE EVENT</p>
            <h1 className='font-medium text-4xl text-white'>Summer Shirt</h1>
            <h1 className='font-medium text-4xl text-white'>Limited Offer – $20</h1>
            <p className='font-normal text-lg  text-white'>Until 12/27/21. Use code FESTIVE at checkout</p>
            <button className='text-white font-semibold text-lg px-6 py-2 bg-[#4f959d] rounded my-4'><Link to={'/shop'}>Shop Now</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Sec3
