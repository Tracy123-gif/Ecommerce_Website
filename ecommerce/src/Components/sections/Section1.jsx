import React from 'react'
import Categories from '../sectionContent/Categories'
import { CgArrowLeft, CgArrowRight } from 'react-icons/cg'


const Section1 = () => {
  return (
    <div className='px-20 py-20 '>
      <div className="navigate flex justify-between">
        <h1 className="sec2title text-4xl font-bold">
            Shop by categories
        </h1>
        <span className="larCon flex gap-2">
            <button className='flex justify-center items-center w-10 rounded-full  border-black border overflow-hidden'><CgArrowLeft /></button>
            <button className='flex justify-center items-center w-10 rounded-full border-black border'><CgArrowRight /></button>
        </span>
      </div>
      <div className="categories">
        <Categories />
      </div>
    </div>
  )
}

export default Section1
