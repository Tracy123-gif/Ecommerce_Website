import React, {createContext, useState, useEffect} from 'react'

// create cartcontext
export const CartContext = createContext()

const CartProvider = ({children}) => {
    //set cart usestate
    const [cart, setCart] = useState([])

    const [itemAmount, setItemAmount] = useState(0)

    //add to cart
    const addToCart = (id, product) => {

        const newItem = {
            ...product,
            amount: 1
        }



        // console.log(newItem) check if the item is already in the cart

        const cartItem = cart.find((item) => {
            return item.id === id;
        })

        if (cartItem) {
            const newCart = [...cart].map(item => {
                console.log(cartItem)
                if (item.id === id) {
                    return {
                        ...item,
                        amount: cartItem.amount + 1
                       
                    }
                } else {
                    return item

                }
              
            })
            setCart(newCart)
        } else {
            setCart([
                ...cart,
                newItem
            ])
        }
    };
    console.log(cart)

    const removeItemFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id
        })
        setCart(newCart)
    }
    const clearCart = () => {
        setCart([])
    }


    
    

    const increaseAmount = (id) => {
     
        const cartItem = cart.find((item) =>  item.id === id)
          addToCart(id, cartItem)
       console.log(cartItem);

    }

    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });

        if(cartItem){
            const newCart = cart.map((item)=>{
                if(item.id === id){
                    return {...item, amount: cartItem.amount - 1}
                }   
                else{
                    return item;
                }
               
            })
            setCart(newCart)
        }if(cartItem.amount < 1 ){
                removeItemFromCart(id)
            }
    
        
            
           
         };
 

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeItemFromCart,
                clearCart,
                increaseAmount,
                decreaseAmount,
                itemAmount,
                setItemAmount
            }}>{children}</CartContext.Provider>
    )
}
//,decreaseAmount
export default CartProvider
