import { useContext } from 'react';
import { ProductContext } from '../ProductContext';





 export const useFilteredWomenProducts = () => {
  // destructure product from product context
  const { products } = useContext(ProductContext);
  


  const filteredWomenProducts = products.filter(item => {
    return item.category === "women's clothing";

  });


  return filteredWomenProducts;

};
//https://fakestoreapi.com/products/categories



