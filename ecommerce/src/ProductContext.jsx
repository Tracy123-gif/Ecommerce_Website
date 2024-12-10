import React from 'react'
import { createContext, useState, useEffect } from 'react'

//create context
export const ProductContext = createContext()


const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])

    
    
    useEffect(()=>{
      const fetchProducts = async()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data)
      };
      fetchProducts()
    }, [])
  return (
    <div>
      <ProductContext.Provider  value={{products}} >{children}</ProductContext.Provider>
    </div>
  )
}

export default ProductProvider
