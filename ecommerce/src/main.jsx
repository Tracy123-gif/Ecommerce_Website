import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './ProductContext.jsx'
import SidebarProvider from './SidebarContext.jsx'
import CartProvider from './CartContext.jsx'
import { ValidateProvider } from './UseValidate.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(


  
     <SidebarProvider>
      <CartProvider>
      <ProductProvider>
     <React.StrictMode>
      <ValidateProvider>
    <App />
    </ValidateProvider>
    </React.StrictMode>
    </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  
)
