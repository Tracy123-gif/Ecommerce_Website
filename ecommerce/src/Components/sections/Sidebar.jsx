import React, { useContext } from 'react';
// import icons
import { IoArrowForward } from 'react-icons/io5';
import { FiTrash2 } from 'react-icons/fi';
// import sidebar context
import { sidebarContext } from '../../SidebarContext';
import { CartContext } from '../../CartContext';
import CartItem from '../component/CartItem';
import CheckOutSection from '../component/CheckOutSection';

const Sidebar = () => {


  const { isOpen, handleClose } = useContext(sidebarContext);
  const { cart, clearCart } = useContext(CartContext)
   
   
  let number = 0
  const totalPrice = cart.forEach(item =>{
    number += item.price;
  })

  

  return (

    <div className={ `${ isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[300vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-scroll`} >

       <div className='flex item-center justify-around py-6 border-b'>

      <div className='uppercase text-sm font-semibold primarytxt'>Your Cart({cart.length})</div>

        <div onClick={ handleClose } className='cursor-pointer w-8 flex justify-center items-center  '>
        <IoArrowForward className='text-2xl' /> {/* this icon is a close button */}

        </div>
       </div>

       <div>{ cart.map((item) => {
          return <CartItem item={item} key={ item.id }/>

       }) }
 
       </div>
         {/*bottom of side bar*/}
       <div className='uppercase font-semibold p-2 flex w-full justify-between items-center border-gray-100 border'>
         <div><span className='mr-2'>Total:</span>{`${number}`}</div>
           {/*icon to crear cart*/}
         <div onClick={clearCart} className='cursor-pointer py-4 primary text-white w-12 h-12 flex justify-center items-center text-xl border border-black hover:bg-transparent duration-150 transition-all'>
          <FiTrash2 />
         </div>
       </div>

       {cart.length > 0 ? <CheckOutSection /> : ""}
    </div>
  );

};

export default Sidebar;
