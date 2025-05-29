
import { useFilteredWomenProducts } from '../../hooks/useFilteredWomenProducts'
import Products from './Products'

const Women = () => {

     const filteredWomenProducts = useFilteredWomenProducts()
  return (
    <div>
      <section className='py-16 mb-64 '>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 max-w-sm mx-auto md:max-w-none md:mx-0 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]'>
          { filteredWomenProducts.map((product) => (
              <Products key={product.id} products={product}/>        
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Women
