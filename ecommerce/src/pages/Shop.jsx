import React from 'react'
// import hook
import { useFilteredProducts } from '../hooks/useFilteredProducts'

//import components
import Products from '../Components/sectionContent/Products'
import Navbar from '../Components/sectionContent/Navbar'
import Footer from '../Components/sections/Footer'
import Sidebar from '../Components/sections/Sidebar'



//shop component for shop page
const Shop = () => {

  
  const filteredProducts = useFilteredProducts()
  return (
    <div >
      <Sidebar />
      <div className='py-5 px-10 sticky'>
      <Navbar />
      </div>
    <section className='py-16 px-20 margin-bottom '>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 max-w-sm mx-auto md:max-w-none md:mx-0 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]'>
          { filteredProducts.map((product) => (
              <Products key={product.id} products={product}/>        
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </div>
  )
}

export default Shop
