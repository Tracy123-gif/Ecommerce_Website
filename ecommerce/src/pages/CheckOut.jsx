import React, { useContext } from 'react'
import Navbar from '../Components/sectionContent/Navbar'

import CartItem from '../Components/component/CartItem'
import { sidebarContext } from '../SidebarContext'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom'
import { CgArrowLeft } from 'react-icons/cg'
import CheckOutContent from '../Components/sections/CheckOutContent'
import { useValidate } from '../UseValidate'

const CheckOut = () => {

    const { cart, clearCart } = useContext(CartContext)
    const { isReg }  = useValidate()

    return (
        <div>
            <div className='py-3 px-6 primary'>
                <Navbar/> 
            </div>
             

             {/* this is the checkout section */}
             <div className='px-10 my-10'> 

                


                <div className='border-2 border-black rounded-2xl'>
                    

                    <div className='flex relative'>
                    
                    <div className="leftCheckOut overflow-x-hidden flex-col w-1/2 p-10 h-full flex justify-start">



                    <div className='flex items-center sticky w-inherit p-2 bg-white px-5'><CgArrowLeft size={30} /><Link  className='mx-2' to={'/shop'}> Continue to shop</Link>
                    </div>
                    <div className='px-5'>you have {cart.length} products in your cart</div>


                       <div>{cart.map((item)=>{
                        return <CartItem item={item} key={item.id} />
                       })}</div>
                    </div>

                    <div className="rightCheckOut primary w-1/2 h-full p-10">
                    <CheckOutContent />
                    </div>
                    </div>
                   


                </div>
             </div>



        </div>

    )
}

export default CheckOut
