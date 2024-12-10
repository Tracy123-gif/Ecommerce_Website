import React from 'react'
import image1 from '../../assets/image12.jpg'
import image2 from '../../assets/Group-3628-1-540x840.jpg'
import image3 from '../../assets/image9.jpg'
import image4 from '../../assets/image10.jpg'

const Categories = () => {
    const categ = [
        {
            imageSrc: image1,
            buttonCon: 'Kids (2)',
        },
        {
            imageSrc: image2,
            buttonCon: 'Mens (1)',
        },
        {
            imageSrc: image3,
            buttonCon: 'Shirts (1)',
        },
        {
            imageSrc: image4,
            buttonCon: 'Skirts (1)',
        },
    ]
  return (
    <div className='catego flex gap-10 overflow-auto  no-scrollbar scroll-m-0'>
      {categ.map((el, key) => (
        <div className='categBox  min-w-72 min-h-72  relative py-10 overflow-hidden'>
            <img src={el.imageSrc} alt="" className='transform transition duration-300 hover:scale-110' />
            <button className='flex justify-center absolute w-36 h-2 bg-white bottom-20 left-20  py-6 items-center rounded-sm font-semibold ' >{el.buttonCon}</button>
        </div>
      ))}
    </div>
  )
}

export default Categories
