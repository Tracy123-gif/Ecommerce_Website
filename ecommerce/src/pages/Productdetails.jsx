import React from 'react'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { CartContext } from '../CartContext'
import { ProductContext } from '../ProductContext'
import Navbar from '../Components/sectionContent/Navbar'
import Footer from '../Components/sections/Footer'



const Productdetails = ( { }) => {

  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)


    const product = products.find(item =>{
      return item.id === parseInt(id);
    })
  if (!product) {
    return <h1 className='primary text-white font-bold flex w-full h-screen justify-center items-center text-4xl '>Loading....</h1>
  }
  console.log(product)

  const {title, image, description, price} = product;
  return (
    <div>
        <div className='p-5'>
        <Navbar />
        </div>   
        <div className='p-5 margin-bottom-md'>
          <div className='flex  gap-8 justify-center p-16'>
            <div className='h-full border-gray-300 p-5 rounded-md border-2 productsDetailImg'>
            <img className='w-11/12 max-w-60 min-w-60' src={image} alt="" />
            </div>
            <div>
              <p className='primarytxt text-3xl'>{title} </p><br /> 
              <p>{description} </p><br />
              <p>${price}</p>
              </div>
          </div>
          </div>   


          <Footer />
      </div>
  )
}

export default Productdetails
