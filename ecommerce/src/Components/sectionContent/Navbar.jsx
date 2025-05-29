import React, {useContext, useEffect} from 'react'
import logo from '../../assets/image6.svg'
import {
    IoBag,
    IoBagAddSharp,
    IoCart,
    IoCartOutline,
    IoCartSharp,
    IoPerson,
    IoPersonOutline,
    IoSearchSharp
} from "react-icons/io5";
import {Link} from 'react-router-dom';
import {FaCartPlus, FaPersonBooth, FaRegHeart} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import {sidebarContext} from '../../SidebarContext';
import {CartContext} from '../../CartContext';
import {useValidate} from '../../UseValidate';

const Navbar = () => {

    const {itemAmount, setItemAmount, cart} = useContext(CartContext)
    const {isOpen, setIsOpen} = useContext(sidebarContext)

    // useEffect(() =>{     const amount = cart.reduce((accumulator, currentItem)=>{
    // return accumulator + currentItem.amount;     }, 0)     setItemAmount[amount]
    // }, [cart])
    const {isLoggedIn, onSubmit, userDetails, isReg, userRegDetails} = useValidate()

    
    const userEmail = userRegDetails.email
    const emailFirstLetter = userEmail.slice(0, 1)
    return (
        <div className='flex justify-between items-center z-10 max-sm:py-6 sticky'>
            <nav className='navLeft flex  gap-10 items-center'>
                <div className="logo text-white font-bold text-4xl ">
                    <p className='text-white'>May</p>
                </div>
                <div className='leftNavLinks flex gap-6 text-white'>

                    <Link to={'/'}>Home</Link>
                    <Link to={'/shop'}>Shop</Link>
                    <Link
                        to={`${isReg
                            ? '/checkOut'
                            : '/register'}`}>
                        Checkout</Link>
                </div>
            </nav>

            <nav className='navRight items-center flex gap-4'>
                {/* <a href="" className=''><IoSearchSharp size={27}/></a> */}
                {
                    isReg
                        ? <Link
                                className='border-2 p-1 w-10 flex justify-center items-center h-10 transition-all duration-100 hover:[w-20px h-24] text-white hover:text-black rounded-full border-white bg-[#183B4E] '
                                to={'/Profile'}>
                                <div className='text-white'>{emailFirstLetter.toUpperCase()}</div>
                            </Link>
                        : <Link className='border-2 rounded-full border-white  bg-white' to={'/Register'}><IoPersonOutline className='p-1 text-white'  color="white" size={25}/></Link>
                }

                <div className='relative cursor-pointer  '  onClick={() => setIsOpen(true)}>
                    <IoBagAddSharp className='text-white' style={{color:"white", fill:"white"}} size={30}/> {console.log(isOpen)}
                    <div
                        className=' border-x-2 border-y-2 border-white absolute -top-4 -left-2  bg-[#316371] z-50 rounded-full p-3 text-white h-5 w-5 flex justify-center items-center'>{cart.length}</div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
