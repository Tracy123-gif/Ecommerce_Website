import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../ProductContext'
import HeaderSection from '../Components/sections/HeaderSection'
import Section1 from '../Components/sections/Section1'
import Sec3 from '../Components/sections/Sec3'
import Sec2 from '../Components/sections/Sec2'
import Footer from '../Components/sections/Footer'
import ScrollToTopButton from '../Components/sectionContent/ScrollToTopButton'
import Sidebar from '../Components/sections/Sidebar'
import CustomerReviews from '../Components/sections/CustomerReviews'





const Homepage = () => {
 
  return (
    <div>
      <Sidebar />
       <HeaderSection />
       <Sec2 />
       <Sec3 />
       <CustomerReviews />
       <Footer />
       <ScrollToTopButton />
    </div>
  )
}

export default Homepage
