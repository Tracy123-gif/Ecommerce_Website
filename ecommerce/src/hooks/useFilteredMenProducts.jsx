import { useContext } from 'react';
import { ProductContext } from '../ProductContext';





 export const useFilteredMenProducts = () => {
  // destructure product from product context
  const { products } = useContext(ProductContext);
  


  const filteredMenProducts = products.filter(item => {
    return item.category === "men's clothing";

  });


  return filteredMenProducts;

};
//https://fakestoreapi.com/products/categories



