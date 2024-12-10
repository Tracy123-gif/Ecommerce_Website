import React, { useRef, useState } from 'react'
import Navbar from '../sectionContent/Navbar'
import HeaderTextContent from '../sectionContent/HeaderTextContent'
import heroImage from '../../assets/image8.jpg'
import heroImage2 from '../../assets/image11.jpg'

const HeaderSection = ({products}) => {
    console.log(products);

    const [image, setImage ] = useState(heroImage)


    setTimeout(() => {
      if (image === heroImage) {
        
          setImage(heroImage2)
      }else{
          setImage(heroImage)
      }
  }, 4000);
    return (
      <div className="headerSection px-20 py-4 overflow-y-hidden">
            <Navbar />
            <div className='headerContentCon h-5/6 flex align-middle     items-center gap-32 '>
                <HeaderTextContent/>
                <div>
                    
                </div>
                {/* <img
                    className='headerImg relative max-sm:w-0  max-md:w-0'
                    src={image}
                    alt=""/> */}
            </div>
        </div>
    )
}

export default HeaderSection
