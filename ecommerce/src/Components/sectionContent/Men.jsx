import React, { useContext } from 'react'
import { useFilteredMenProducts } from '../../hooks/useFilteredMenProducts'
import Products from './Products'

const Men = () => {
  const filteredMenProducts = useFilteredMenProducts()

    

   

  return (
    <div>
       <section className='py-16 flex justify-center'>
      <div className='container '>
        <div className='grid grid-cols-1 max-w-sm mx-auto md:max-w-none md:mx-0 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]'>
          { filteredMenProducts.map((product) => (
              <Products key={product.id} products={product}/>        
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Men



























