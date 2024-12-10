import React, { useContext, useState } from 'react'
import { IoAdd, IoEye, IoSearch, IoArrowBack, IoArrowForward } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { CartContext } from '../../CartContext';
import { ProductContext } from '../../ProductContext';

const Products = ({ allProducts, products }) => {
    const { addToCart } = useContext(CartContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    const { id, image, category, title, price, description } = products;


    // const { products } = useContext(ProductContext)
    const [addedToCart, setAddedToCart] = useState('Add to Cart')
    console.log(products)


    const openModal = (product) => {
        setCurrentProduct(product);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleNextProduct = () => {
        const currentIndex = products.findIndex(p => p.id === currentProduct.id);
        const nextProduct = products[(currentIndex + 1) % allProducts.length];
        setCurrentProduct(nextProduct);
    };

    // const handlePreviousProduct = () => {
    //     const currentIndex = allProducts.findIndex(p => p.id === currentProduct.id);
    //     const previousProduct = allProducts[(currentIndex - 1 + allProducts.length) % allProducts.length];
    //     setCurrentProduct(previousProduct);
    // };
    const handlePreviousProduct = () => {
        // Get the current product's index in the array
        const filteredProducts = products.filter(p => { p.id === currentProduct.id});


        
        if (filteredProducts.length === 1) {
            const currentIndex = products.indexOf(filteredProducts[0]);
            
            // Find the previous product index
            const previousIndex = (currentIndex - 1 + products.length) % products.length;
            const previousProduct = products[previousIndex];
    
            // Update the current product state
            setCurrentProduct(previousProduct);
        }
    };
    

    return (
        <div>
            {/* Product Card */}
            <div className='border border-[#e4e4e4] p-5 h-[300px] mb-4 relative overflow-hidden group transition'>
                <div className='w-full h-full flex justify-center items-center '>
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <img src={image} alt="" className='max-h-[160px] group-hover:scale-110 transition duration-300' />
                    </div>
                    <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 primary opacity-0 group-hover:opacity-100 transition-all'>
                        <button onClick={() => openModal(products)} className='w-10 h-10 bg-white rounded-full flex justify-center items-center drop-shadow-2xl'>
                            <IoEye className='text-2xl text-white' />
                        </button>
                    </div>
                    <div>
                        <div onClick={() => addToCart(id, products)} className="addRemoveCart absolute -bottom-11 group-hover:bottom-0 p-2 flex primary opacity-0 group-hover:opacity-100 transition-all w-full left-0 cursor-pointer text-white">
                            <p className='text-center flex items-center justify-center'>{addedToCart}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={`/product/${id}`}>
                <h2 className='font-semibold mb-1 primarytxt'>{title}</h2>
            </Link>
            <p className="text-sm capitalize text-gray500">${price}</p>

            {/* Modal */}
            {modalVisible && (
                <div className={`${modalVisible ?  'z-40 fixed inset-0 bg-black bg-opacity-75' : 'bg-opacity-0'} modal  transition-all duration-300  flex items-center justify-center`}>
                    <div className="relative w-3/4 flex gap-10  modal-content bg-white px-20 py-10 rounded-lg ">
                          <button onClick={closeModal} className="text-white  w-10 h-10 rounded-full flex justify-center items-center primary absolute top-3 right-3 hover:bg-white duration-300 transition-all hover:text-white">X</button>

                        <div className='p-5 border-gray-300 rounded-md border-2'>
                        <img src={currentProduct.image} alt={currentProduct.title} className="w-1/2 h-64 object-contain max-w-48 min-w-48" />
                        </div>
                        


                       <div>
                       <h2 className='font-semibold mt-4 primarytxt text-2xl'>{currentProduct.title}</h2>
                       <p className='text-gray-600 py-10'>${currentProduct.description}</p>
                       <p className='text-gray-600 mb-10'>${currentProduct.price}</p>
                       </div>
                        {/* <div className="flex absolute bottom-10 right-1/2 gap-10 left-1/2 justify-between mt-4">
                            <button onClick={handlePreviousProduct} className="flex items-center p-2">
                                <IoArrowBack /> Previous
                            </button>
                            <button onClick={handleNextProduct} className="flex items-center p-2">
                                Next <IoArrowForward />
                            </button>
                        </div> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;




















// import React, { useContext, useState } from 'react'
// import {IoAdd, IoEye, IoSearch} from 'react-icons/io5'
// import { Link } from 'react-router-dom'
// //import cart context
// import { CartContext } from '../../CartContext';


// const Products = ({products}) => {
    
//     const { addToCart } = useContext(CartContext)
    


//     const {id, image, category, title, price} = products

//     const [addedToCart, setAddedToCart] = useState('Add to Cart')
    
//     return (
//         <div>
//             <div className='border border-[#e4e4e4] p-5 h-[300px] mb-4 relative overflow-hidden group transition'>
//                 <div className='w-full h-full flex justify-center items-center '>
//                     {/* image container */}
//                     <div className='w-[200px] mx-auto flex justify-center items-center'>
//                         <img
//                             src={image}
//                             alt=""
//                             className='max-h-[160px] group-hover:scale-110 transition  duration-300'/>
//                     </div>
//                     <div
//                         className='absolute rounded-md top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center  gap-y-2  primary opacity-0 group-hover:opacity-100 transition-all duratio0n-300'>
//                         {/* <button>
//                             <div className='flex justify-center items-center text-white w-10 h-10'><IoAdd className='text-2xl'/></div>
                            
//                         </button>  */}
//                          <Link to={`/product/${id}`} className='w-10 h-10 bg-white rounded-full flex justify-center items-center drop-shadow-2xl text-white'>
//                        <IoEye className='text-2xl ' /> 
//                         </Link>
//                         {/* <Link to={''} className='w-10 h-10 bg-white rounded-full flex justify-center items-center drop-shadow-2xl text-white'>
//                         <IoSearch className='text-2xl'/>
//                         </Link>  */}
//                     </div>
//                     <div>
//                         <div onClick={()=> addToCart(id, products) } className="active:border-black border-2 addRemoveCart absolute -bottom-11 group-hover:bottom-0 p-2 flex primary opacity-0 group-hover:opacity-100 transition-all duratio0n-300 w-full left-0  cursor-pointer  text-white" ><p className='text-center flex items-center justify-center'>{addedToCart}</p></div>
//                     </div>
                    
//                 </div>
                
//             </div>
//             <Link to={`/product/${id}`}>
//                 <h2 className='font-semibold mb-1 primarytxt'>{title}</h2>
//             </Link>
//             <p className="text-sm capitalize text-gray500">${price}</p>
 
 
          
//         </div>
//     )
// }

// export default Products
