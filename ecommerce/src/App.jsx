import React, { useEffect, useState } from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Productdetails from './pages/Productdetails'
import { ChakraProvider } from '@chakra-ui/react'
import Shop from './pages/Shop'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import CheckOut from './pages/CheckOut'
import Profile from './pages/Profile'
import Register from './pages/Register'





const App = () => {

  const [w, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <ChakraProvider>
    <div className="MyWebsiteBody">
     {
      w < 1000 ? (
        <p>This content is only available for pc</p>
      ) : (

         <Router>
        <Routes>
            <Route path='/' element={ <Homepage />} />
            <Route path='/product/:id' element={<Productdetails />} />
            <Route path='/shop' element={<Shop />} />
             <Route path='/Login' element={<Login />} />
             <Route path='/Profile' element={<Profile />} />
             <Route path='/Register' element={<Register />} />
             <Route path='/CheckOut' element={<ProtectedRoute> <CheckOut /> </ProtectedRoute>}/>  
        </Routes>
      </Router>
      )
     }
    </div>
    </ChakraProvider>
  )
}

export default App
