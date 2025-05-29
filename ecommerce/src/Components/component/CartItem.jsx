/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {IoPulse, IoTrashOutline} from 'react-icons/io5'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { CartContext } from '../../CartContext'

const CartItem = ({item}) => {

  const { removeItemFromCart,  increaseAmount, decreaseAmount
   } = useContext(CartContext)

    //item destruction
    const {id, title, image, price, amount } = item

    
    return (
        <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light'>
            <div className='w-full min-h-[150px] flex items-center gap-x-4'>
                {/*cart image*/}
                <Link to={`/Products/${id}`}>
                    <img className='max-w-[80px]' src={image} alt=""/>
                </Link>
                {/*title and  icon */}
                <div className='w-full flex flex-col'>
                    <div className='flex justify-between mb-2'>

                        <Link
                            className='uppercase text-bold primarytxt text-medium hover:underline max-w-[240px]'
                            to={`/product/${id}`}>{title}</Link>
                              {/* remove product icon */}
                    <div onClick={()=> removeItemFromCart(id)}>
                        <IoTrashOutline
                            className='hover:fill-red-400 text-red-900 transition-all duration-300 cursor-pointer'/>
                    </div>
                  </div>
                  <div className='flex gap-x-2 h-[36px] text-sm items-center'>
                       <div className='flex flex-1 max-w-[100px] p-2  items-center h-full border font-medium justify-center'>
                        {/* minus icon */}

                          <div className='flex-1 cursor-pointer' onClick={()=>{decreaseAmount(id)}}>
                          <FaMinus className='' />
    
                          </div>

                         <div className='h-full flex flex-1 justify-center items-center px-2'>{amount}</div>

                         <div className='flex-1 h-full flex justify-center items-center cursor-pointer' onClick={ ()=>increaseAmount(id) } >
                          <FaPlus  />
                         </div>
                       </div>
                      <div className='flex-1 flex items-center justify-around'>{`$${price}`}</div>
                      <div className='flex-1 flex justify-end items-center font-medium'>{`$ ${parseFloat(item.price* amount).toFixed(2)}`}</div>
                      
                 </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default CartItem
