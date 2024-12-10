import { useContext } from 'react';
import { ProductContext } from '../ProductContext';

 export const useFilteredProducts = () => {
  // destructure product from product context
  const { products } = useContext(ProductContext);
  


  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing" ;
    console.log(filteredProducts)
  });

  return filteredProducts;

};
//https://fakestoreapi.com/products/categories


